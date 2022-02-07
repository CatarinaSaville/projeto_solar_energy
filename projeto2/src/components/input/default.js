import React from "react";
import { ContainerInput, LabelText, InputTextBorder} from "./styles";

function Input({ label, ...otherProps }){
    return(
        <ContainerInput>
            <LabelText>{label}</LabelText>
            <InputTextBorder {...otherProps}/>
        </ContainerInput>
    );
}

export default  React.memo(Input);