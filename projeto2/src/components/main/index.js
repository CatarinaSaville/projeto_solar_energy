import React from 'react';
import { MainContent, MainDiv } from "./styles";
import Menu from '../Menu';


export default function MainContainer({ children }) {

    return (
        <MainDiv>
            <Menu></Menu>
            <MainContent>
                {children}
            </MainContent>
        </MainDiv>

    );
}

