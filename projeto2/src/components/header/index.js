import React from 'react';
import { HeaderDiv } from "./styles";

export default function Header({ children }) {

    return (
        <HeaderDiv>
            <h1>
                {children}
            </h1>
        </HeaderDiv>

    );
}