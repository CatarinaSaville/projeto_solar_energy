import React,{ useState, useEffect} from 'react'
import Header from '../../components/header';
import MainContainer from '../../components/main';
import Content from '../../components/content';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Grafico, CardGrafico, Cards, Card } from './styles';
import unidadesService from '../../services/unidades';


export default function Chart({ labels, dataPlot }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    loadConsumos()
  }, [])

  const [consumos, setConsumos] = useState([])

  const loadConsumos = () => {
    try {
      unidadesService.listConsumo().then((result) => {
        console.log(result.data)
        setConsumos(result.data)
      })
    } catch (error) {
      console.log(error);
      alert("Não foi possível buscar as unidades.")
      setConsumos([])
    }
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        position: 'right'
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: consumos.map(consumo => {return consumo.data}),
    datasets: [
      {
        labels: 'Geraçao',
        data: consumos.map(consumo => {return consumo.totalKw}),
        borderColor: '#000',
        backgroundColor: '#000',
      },
    ],
  };

  return (
    <MainContainer>

      <Header>Dashboard</Header>
      <Content>

        <Cards>
          <Card
            itemType='number'
            label='Total Unidades'
          ></Card>

          <Card>Unidades Ativas </Card>

          <Card>Unidades inativas</Card>

          <Card>Media de energia</Card>

        </Cards>

        <CardGrafico>
          <h3>Total de energia gerada por mês</h3>
          <Grafico>
            <Line options={options} data={data} />
          </Grafico>
        </CardGrafico>

      </Content>
    </MainContainer>
  );
}
