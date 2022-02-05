import styled from "styled-components";

export const Label = styled.h4`
color: black;
`;

export const config = {
    type: 'line',
    data: 'data',
  };

  export const Grafico = styled.div`
  width: 100%;
  height: 50%;
  `;

export const Cards = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 60%;
margin-left: 20%;
`;

export const Card = styled.span`

background-color: white;
width: 60px;
`

export const CardGrafico = styled.div`
background-color: white;
display: flex;
justify-content: space-around;
flex-direction: column;
text-align: center;
width: 670px;
margin: 70px 20%;
`;