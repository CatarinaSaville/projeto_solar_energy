import React from "react";
import unidadesService from '../../services/unidades';
import MainContainer from '../../components/main';
import Content from "../../components/content";
import Header from "../../components/header";
import Checkbox from "../../components/checkbox";
import Input from "../../components/input/default";
import { Button } from "../../components/buttons/styles";
import { Form } from "./styles"

export default class Cadastro extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: null,
      ativo: false,
      apelido: '',
      marca: '',
      modelo: '',
      local: ''
    }
  };

  componentDidMount() {
    if (this.props?.match?.params?.id) {
      let unidadeId = this.props.match.params.id
      this.loadUnidade(unidadeId)
    }
  }

  async loadUnidade(unidadeId) {
    try {
      let res = await unidadesService.getOne(unidadeId)
      let unidade = res.data.data[0]
      this.setState(unidade)
    } catch (error) {
      console.log(error);
      alert("Não foi possível carregar as unidades.")
    }
  }

  async sendUnidade() {

    let data = {
      apelido: this.state.apelido,
      marca: this.state.marca,
      modelo: this.state.modelo,
      ativo: this.state.ativo,
      local: this.state.local,
    }


    try {
      if (this.state.id) {
        await unidadesService.edit(data, this.state.id)
        alert("Unidade editada com sucesso!")
      }
      else {
        await unidadesService.create(data)
        alert("Unidade criado com sucesso!")
      }

      // this.props.history.push('/unidadeLista')
    } catch (error) {
      console.log(error)
      alert("Erro ao criar unidade.")
    }
  };
  handleSubmit(event) {
    event.preventDefault();
    this.sendUnidade();

  };

  render() {

    return (
      <MainContainer>
        <Header>Unidades</Header>
        <Content>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <h2>Cadastro de Unidade Geradora</h2>
            <Input
              type="text"
              label="Apelido"
              onChange={(e) => this.setState({ apelido: e.target.value })}
              placeholder="Painel1"
              value={this.state.apelido}
            ></Input>

            <Input
              type="text"
              label="Local"
              onChange={(e) => this.setState({ local: e.target.value })}
              placeholder="Rua Alberto, 430"
              value={this.state.local}>
            </Input>

            <Input
              type="text"
              label="Marca"
              onChange={(e) => this.setState({ marca: e.target.value })}
              value={this.state.marca}
              placeholder="Resun"></Input>

            <Input
              type="text"
              label="Modelo"
              onChange={(e) => this.setState({ modelo: e.target.value })}
              placeholder="155w"
              value={this.state.modelo}></Input>

            <Checkbox
              checked={this.state.ativo}
              onChange={(e) => this.setState({ ativo: e.target.checked })}
              label="Ativo"
              value={this.state.ativo}
            />
            <br />
            <Button type="submit">
              Salvar
            </Button>
          </Form>
        </Content>
      </MainContainer>
    );

  }
};