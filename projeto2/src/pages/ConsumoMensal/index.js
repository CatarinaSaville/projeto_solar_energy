import React, { useState, useEffect } from 'react';
import MainContainer from '../../components/main';
import Content from "../../components/content";
import Header from '../../components/header';
import Select from '../../components/Select';
import Input from '../../components/input/default';
import { Button } from '../../components/buttons/styles';
import unidadesService from '../../services/unidades';
import { Form } from './styles';
import { useNavigate } from 'react-router';

export default function GeracaoMensal() {

  const form = {
    unidadeId: '',
    data: '',
    totalKw: '',
  }

  let navigate = useNavigate();
  const [unidadeOptions, setOptions] = useState();
  const [cadastro, setCadastro] = useState(form);

  const evento = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setCadastro({ ...cadastro, [nome]: valor });
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendConsumo();
  };

  const sendConsumo = () => {

    try {
      console.log(cadastro)
      unidadesService.addConsumo(cadastro)
      alert("Consumo cadastrado com sucesso!")
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      alert("Erro ao salvar consumo.")
    }
  }

  useEffect(() => {
    loadUnidades()
  }, [])

  const loadUnidades = () => {
    try {
      unidadesService.list().then((result) => {
        let unidades = result.data.map((unidade) => {
          return { id: unidade.id, value: unidade.apelido }
        })
        setOptions(unidades)
      })

    } catch (error) {
      console.log(error);
      alert("Não foi possível buscar as unidades.")
      setOptions([])
    }
  }


  return (
    <MainContainer>
      <Header>Lançamento de geraçao mensal</Header>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Select
            name="unidadeId"
            label="Unidade geradora"
            options={unidadeOptions}
            description="Selecione um tipo"
            onChange={evento}
          ></Select>

          <Input
            name="data"
            label="Mês/Ano"
            required
            id="date"
            type="month"
            pattern="[0-9]{2}-[0-9]{4}"
            onChange={evento}>
          </Input>

          <Input
            name="totalKw"
            label={"Total kw gerado"}
            type="number"
            onChange={evento}
            placeholder="80W"
          />
          <br />
          <Button type='submit'>
            Cadastrar
          </Button>
        </Form>
      </Content>
    </MainContainer>
  );
};
