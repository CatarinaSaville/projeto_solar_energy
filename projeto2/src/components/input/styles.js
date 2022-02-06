import styled from "styled-components";

export const InputText = styled.input`
width: 100%;
height: 35px;
border-radius: 10px;
padding-left: 5px;
margin: 5px;
border-style: none;

&:focus {
  border-color: #4CBC9A;
}
`;

export const InputTextBorder = styled.input`
width: 80%;
height: 32px;
border-radius: 3px;

`;


export const LabelText = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #212529;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: left;

`;
