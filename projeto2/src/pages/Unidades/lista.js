import React, { useEffect, useState } from "react";
import unidadesService from '../../services/unidades';
import MainContainer from '../../components/main';
import Content from "../../components/content";
import Header from '../../components/header';
import { Link } from "react-router-dom";
import { Button, ButtonEdit, ButtonDelete } from "./styles";
import { Table } from "./styles";

export default function ListaUnidades() {

    const [unidades, setUnidades] = useState([])

    useEffect(() => {
        loadUnidades()
    }, [])

    const loadUnidades = () => {
        try {
            unidadesService.list().then((result) => {
                console.log(result.data)
                setUnidades(result.data)
            })
        } catch (error) {
            console.log(error);
            alert("Não foi possível buscar as unidades.")
            setUnidades([])
        }
    }

    const deletar = (unidadeId) => {
        try {
            unidadesService.delete(unidadeId)
            loadUnidades()
        } catch (error) {
            console.log(error);
            alert("Não foi possível deletar a unidade.")
        }
    }

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
                            {unidades?.map((unidade) => {
                                return (
                                    <tr>
                                        <td>{unidade.id}</td>
                                        <td>{unidade.apelido}</td>
                                        <td>{unidade.local}</td>
                                        <td>{unidade.marca}</td>
                                        <td>{unidade.modelo}</td>
                                        <td>
                                            <ButtonEdit>
                                                <Link to={"/unidadeCadastro/" + unidade.id} >Editar</Link>
                                            </ButtonEdit>
                                            <ButtonDelete onClick={() => deletar(unidade.id)}>
                                                Remover
                                            </ButtonDelete>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </Table>
                </div>
                <div>
                    <Button>
                        <Link to="/unidadeCadastro" >Nova unidade</Link>
                    </Button>
                </div>

            </Content>
        </MainContainer>
    )
};
