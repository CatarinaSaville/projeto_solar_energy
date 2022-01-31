import React, { useState } from 'react';
import MainContainer from '../../components/main';
import Header from '../../components/header';
import Content from "../../components/content";
import Select from '../../components/Select';
import { Form} from './styles';
import { Button } from '../../components/buttons/styles';
import Input from '../../components/input/default';

export default function GeracaoMensal() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  const OPTIONS_UNIDADE = [
    {
      value: '1',
      label: 'Unidade 1'
    },
    {
      value: '2',
      label: 'Unidade 2'
    },

  ];

  const [optionUnidadeGeradora, setOptUnidadeGeradora] = useState('');
  const [numberKw, setNumberKw] = useState('');

  return (
    <MainContainer>
      <Header>Lançamento de geraçao mensal</Header>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Select
            label="Unidade geradora"
            value={optionUnidadeGeradora}
            onChange={(event) => setOptUnidadeGeradora(event.target.value)}
            options={OPTIONS_UNIDADE}
            description="Selecione um tipo"
          />

          <Input 
          label="Mês/Ano"
          required
          id="date" 
          type="month"
          pattern="[0-9]{2}-[0-9]{4}"
          >
          </Input>

          <Input
            label={"Total kw gerado"}
            value={numberKw}
            onChange={(event) => setNumberKw(event.target.value)}
            placeholder="80"
          />
          <br/>
          <Button type='submit'>
            Cadastrar
          </Button>
        </Form>
      </Content>
    </MainContainer>
  );
};
