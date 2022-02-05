import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import axios from "axios";

class App extends React.Component {
constructor(props) {
    super(props);
    this.staate = {
      isLogin: false,
    userinfo: null,
    }
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this)
    this.handler = this.handler.bind(this)
  }

  handleResponseSuccess() {
    axios.get('http://localhost:4000/user')
    .then((res) => {
      this.setState({ isLogin: true, userinfo: { ...res.data }, });
      this.props.history.push("/");
    });
  }

  handler() {
    axios.post('https://localhost:4000/signout', null, {
      withCredentials: true,
    })
      .then((res) => {
        this.setState({
          isLogin: false,
        });
        this.props.history.push('/')
      })
      .catch((err) => alter(err));
  }


  render() {
    const { isLogin, userinfo } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path='/login'
            render={() => (
              <Login handleResponseSuccess={this.handleResponseSuccess} />
            )}
          />
          <Route exact path='/signup' render={() => <Signup />} />
          <Route
            exact
            path='/mypage'
            render={() => <Mypage userinfo={userinfo} handleLogout={this.handler}/>}
          />
          <Route
            path='/'
            render={() => {
              if (isLogin) {
                return <Redirect to='/mypage' />;
              }
              return <Redirect to='/login' />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);