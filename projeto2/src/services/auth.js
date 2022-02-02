import axios from 'axios';
const apiUrl = "http://localhost:4000"

const authService = {

    async login(email, senha) {
        const enpoint = apiUrl + "/login?email=" + email + "&senha=" + senha;
        return axios.get(enpoint)
    },

}

export default authService;