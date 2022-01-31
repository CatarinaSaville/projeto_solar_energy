import React from 'react';
import {ContentDiv} from './styles';

export default function Content({children}){

    return (
        <ContentDiv>
            {children}
        </ContentDiv>
    )
};