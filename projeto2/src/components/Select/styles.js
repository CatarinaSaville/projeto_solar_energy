import styled from 'styled-components';

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px  ;

`;

export const DescriptionSelect = styled.label`
  
  margin-bottom: 15px;
  color: #212529;
`;

export const List = styled.select`
  background: #FFF;
  width: 100%;
  height: 35px;
  border: 1px solid #ced4da;
  padding-left: 5px;
  border-radius: 2px;
  

  option {
    background: blue;
  }

  &:focus {
    border-color: pink;
  }
`;
