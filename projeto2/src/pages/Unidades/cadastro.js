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
  const { id } = useParams()
  let navigate = useNavigate();
  const [formulario, setFormulario] = useState(cadastro);

  const evento = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setFormulario({ ...formulario, [nome]: valor });
  }


  useEffect(() => {
    console.log(id)
    
    if (id) {
      loadUnidade(id)
    }
  }, [])


  const loadUnidade = (unidadeId) => {
    try {
      unidadesService.getOne(unidadeId).then((result)=> {
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
        unidadesService.create(formulario)
        alert("Unidade criado com sucesso!")
      }

      // this.props.history.push('/unidadeLista')
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
            name="apelido"
            type="text"
            label="Apelido"
            onChange={evento}
            value={formulario.apelido}
            placeholder="Painel1" />

          <Input
            name="local"
            type="text"
            label="Local"
            onChange={evento}
            value={formulario.local}
            placeholder="Rua Alberto, 430" 
            />
          <Input
            name="marca"
            type="text"
            label="Marca"
            onChange={evento}
            value={formulario.marca}
            placeholder="Resun" 
            />
            
            <Input
            name="modelo"
            type="text"
            label="Modelo"
            onChange={evento}
            value={formulario.modelo}
            placeholder="155w"
             />

          <Checkbox
            name="ativo"
            onChange={evento}
            value={formulario.ativo}
            label="Ativo" 
            />
          <br />

          <Button type="submit">Salvar</Button>
        </Form>
      </Content>
    </MainContainer>
  );
}