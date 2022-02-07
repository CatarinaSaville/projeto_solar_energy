import React, { useState, useEffect } from "react";
import MainContainer from '../../components/main';
import Content from "../../components/content";
import Header from "../../components/header";
import Checkbox from "../../components/checkbox";
import Input from "../../components/input/default";
import { Button } from "../../components/buttons/styles";
import { Form } from "./styles"
import unidadesService from "../../services/unidades";
import { useNavigate, useParams } from 'react-router';


export default function Cadastro() {
  const cadastro = {
    id: '',
    ativo: '',
    apelido: '',
    marca: '',
    modelo: '',
    local: '',
  }
  const { id } = useParams();

  let navigate = useNavigate();

  const [formulario, setFormulario] = useState(cadastro);

  useEffect(() => {
    console.log(id)

    if (id) {
      loadUnidade(id)
    }
  }, [id])

  const evento = (e) => {
    let nome = e.target.name;
    let valor = e.target.type == "checkbox" ? e.target.checked : e.target.value;
    setFormulario({ ...formulario, [nome]: valor });
  }

  const loadUnidade = (unidadeId) => {
    try {
      unidadesService.getOne(unidadeId).then((result) => {
        setFormulario(result.data)
      })
    } catch (error) {
      console.log(error);
      alert("Não foi possível carregar a unidade.")
    }
  }

  const sendUnidade = () => {
    try {
      if (formulario.id) {
        unidadesService.edit(formulario, formulario.id)
        alert("Unidade editada com sucesso!")
      }
      else {
        unidadesService.addUnidade(formulario)
        alert("Unidade criado com sucesso!")
      }
      navigate('/unidadeLista')
    } catch (error) {
      console.log(error)
      alert("Erro ao salvar unidade.")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendUnidade();
  };

  return (
    <MainContainer >
      <Header>Unidades</Header>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h2>Cadastro de Unidade Geradora</h2>

          <Input
            label="Apelido"
            name="apelido"
            type="text"
            onChange={evento}
            value={formulario.apelido}
            placeholder="Painel1" />

          <Input
            label="Local"
            name="local"
            type="text"
            onChange={evento}
            value={formulario.local}
            placeholder="Rua Alberto, 430"
          />
          <Input
            label="Marca"
            name="marca"
            type="text"
            onChange={evento}
            value={formulario.marca}
            placeholder="Resun"
          />

          <Input
            label="Modelo"
            name="modelo"
            type="text"
            onChange={evento}
            value={formulario.modelo}
            placeholder="155w"
          />

          <Checkbox
            label="Ativo"
            name="ativo"
            onChange={evento}
            value={formulario.ativo}
          />
          <br />

          <Button type="submit">Salvar</Button>
        </Form>
      </Content>
    </MainContainer>
  );
}