import React from "react";
import { ContainerInput, InputText, LabelText} from "./styles";

function Input({ label, ...otherProps }){


    return(
        <ContainerInput>
            <LabelText>{label}</LabelText>
            <InputText {...otherProps}/>
        </ContainerInput>
    );
}

export default  React.memo(Input);