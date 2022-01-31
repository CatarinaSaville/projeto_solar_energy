import React from 'react';
import {
    LabelContainer,
    InputCheckbox,
    Description,
    ErrorMessage
  } from './styles';
  
  export default function Checkbox({ label, errorMessage, ...otherProps }) {
    return (
      <LabelContainer>
        <InputCheckbox
          type="checkbox"
          {...otherProps}
        />
        <Description>{label}</Description>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </LabelContainer>
    );
  }