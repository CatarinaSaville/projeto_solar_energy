import React from 'react';
import { Link } from 'react-router-dom';
import { LateralMenu, MenuLi, MenuUl, SolarLogo } from './styles';


export default function Menu() {


  return (
    <LateralMenu>
      <SolarLogo src="./logo1.png"></SolarLogo>
      <nav className='menu'>
        <MenuUl>

          <MenuLi><Link to="/dashboard" className='menu-list-item' >Dashboard</Link></MenuLi>
          <MenuLi><Link to="/unidade/lista" className='menu-list-item'  >Unidades </Link></MenuLi>
          <MenuLi><Link to="/consumoMensal" className='menu-list-item' >  Cadastro de energia gerada </Link></MenuLi>
        </MenuUl>
      </nav>
    </LateralMenu>

  )
}