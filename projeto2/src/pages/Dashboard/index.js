import React from 'react'
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
import { Grafico, CardGrafico } from './styles';


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

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        position: 'left'
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        labels: 'Geraçao',
        data: dataPlot,
        borderColor: '#2196F3',
        backgroundColor: '#2196F3',
      },
    ],
  };

  return (
    <MainContainer>

      <Header>Dashboard</Header>
      <Content>
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
