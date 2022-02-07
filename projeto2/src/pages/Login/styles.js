import styled from 'styled-components';

export const SolarLogo = styled.img`
width: 309px;
height: 309px;
`;

export const Borda = styled.div`
border-style:solid;
border-color: #FBF4F4;
border-radius:2px;
border-width:1px;
`;

export const LoginButton = styled.button`
width: 100%;
height: 42.32px;
margin: 10px;
background: #4CBC9A;
border-radius: 10px;
border-style: none;
`;

export const LeftSideLogin = styled.div`
width: 50%;
background-image: url("./image.png");
`;

export const RightSideLogin = styled.div`
background-color:#FAFAFA;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
`;


export const FormLogin = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
justify-content: space-between;
`;

export const PageLogin = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
min-height: 650px;
height: auto;
`;