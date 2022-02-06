import React from 'react';
import { ContainerSelect, DescriptionSelect, List } from "./styles";

function Select({ label, options, description, ...otherProps }) {

  return (
    <ContainerSelect>

      <DescriptionSelect>{label}</DescriptionSelect>
      <List {...otherProps} defaultValue="">
        <option  value="">{description}</option>
        {options?.map((option) => 
          <option value={option.id}>
            {option.value}
          </option>
        )}
      </List>
    </ContainerSelect>
  );
}

export default React.memo(Select);