import React from 'react';
import { Link } from 'react-router-dom';
import { LateralMenu, MenuLi, MenuUl, SolarLogo, MenuLogo } from './styles';

export default function Menu() {

  return (
    <LateralMenu>
      <SolarLogo src="./logo1.png"></SolarLogo>
      <nav>

        <MenuUl>
          <MenuLi><Link to="/dashboard"><MenuLogo src="./dash.png"/>Dashboard</Link></MenuLi>
          <MenuLi><Link to="/unidadeLista"> <MenuLogo src="./Activity.png"/>Unidades </Link></MenuLi>
          <MenuLi ><Link to="/consumoMensal"> <MenuLogo src="./icone.png"/> Cadastro de energia gerada </Link></MenuLi>
        </MenuUl>

      </nav>
    </LateralMenu>
  )
}