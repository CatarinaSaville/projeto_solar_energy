import React, { useState } from "react";
import { InputText } from "../../components/input/styles.js";
import { Borda, LoginButton, PageLogin, LeftSideLogin, RightSideLogin, SolarLogo, FormLogin } from './styles.js'
import { Link } from 'react-router-dom';

export default function Logon() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <PageLogin>
            <LeftSideLogin></LeftSideLogin>
            <RightSideLogin>
                <SolarLogo src="./logo1.png"></SolarLogo>
                <p>Seja bem vindo</p>

                <FormLogin onSubmit={handleSubmit} >

                    <Borda>
                        <InputText
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(event) => setEmail(event.target.checked)}
                            value={email}
                            required />
                    </Borda>
                    <Borda>
                        <InputText
                            type="password"
                            name="password"
                            placeholder="Senha"
                            onChange={(event) => setPassword(event.target.checked)}
                            value={password}
                            required />
                    </Borda>
                    <LoginButton name="btn" type="submit" >
                        <Link to="/dashboard" className='link'  >Entrar</Link>
                    </LoginButton>
                </FormLogin>
            </RightSideLogin>
        </PageLogin>
    )

};
