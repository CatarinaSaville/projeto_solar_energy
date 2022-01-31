import React from 'react'
import Header from '../../components/header';
import MainContainer from '../../components/main';
import Content from '../../components/content';
// import {Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// Title,
// Tooltip,
// Legend,
// } from 'chart.js'
// import {Line} from 'react-chartjs-2';
// import fakei from 'fakei';

export default function Dashboard() {

  // const labels = Utils.months({ count: 7 });
  // const data = {
  //   labels: labels,
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     fill: false,
  //     borderColor: 'rgb(75, 192, 192)',
  //     tension: 0.1
  //   }]
  // };

  return (
    <MainContainer>

      <Header>Dashboard</Header>
      <Content>
        <div>
          <h3>Total de energia gerada por mês</h3>


        </div>
      </Content>
    </MainContainer>
  );
};
