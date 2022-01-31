import React, { useState } from "react";
import unidadesService from '../../services/unidades';
import MainContainer from '../../components/main';
import Content from "../../components/content";
import Header from '../../components/header';
import { Link } from "react-router-dom";
import { Button, ButtonEdit, ButtonDelete } from "./styles";
import { Table } from "./styles";


export default class ListaUnidades extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unidades: [],
        }
    }

    componentDidMount() {
        this.loadUnidades()
    }

    async loadUnidades() {
        try {
            let res = await unidadesService.list()
            this.setState({ unidades: res.data })
        } catch (error) {
            console.log(error);
            alert("Não foi possível listar as unidades.")
        }
    }

    deletar(unidadeId) {
        try {
            unidadesService.delete(unidadeId)
        } catch (error) {
            console.log(error);
            alert("Não foi possível deletar a unidade.")
        }
    }

    render() {


        return (
            <MainContainer>
                <Header>Unidades</Header>
                <Content>
                    <div>
                        <h2>Lista de unidades</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Apelido</th>
                                    <th>Local</th>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th></th>
                                </tr>

                            </thead>
                            <tbody>
                                {this.state.unidades.map((unidade) => (
                                    <tr>
                                        <td>{unidade.id}</td>
                                        <td>{unidade.apelido}</td>
                                        <td>{unidade.local}</td>
                                        <td>{unidade.marca}</td>
                                        <td>{unidade.modelo}</td>
                                        <td>
                                            <ButtonEdit>
                                                <Link to={"/unidade/cadastro/" + unidade.id} className='link' >Editar</Link>
                                            </ButtonEdit>
                                            <ButtonDelete onClick={this.deletar(unidade.id)}>
                                            </ButtonDelete>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                    </div>
                    <div>
                        <Button>
                            <Link to="/unidade/cadastro" className='link' >Nova unidade</Link>
                        </Button>
                    </div>


                </Content>
            </MainContainer>
        )
    }


}