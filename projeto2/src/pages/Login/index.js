import React, { useState } from "react";
import { InputText } from "../../components/input/styles.js";
import { Borda, LoginButton, PageLogin, LeftSideLogin, RightSideLogin, SolarLogo, FormLogin } from './styles.js'
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.js";

export default function Logon() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        if (validar()) {
            try {
                let user = await authService.login(email, password)
                console.log(user.data.length)
                if (user.data.length > 0) {
                    navigate("/dashboard");
                } else {
                    alert("Usuário e/ou senha incorretos")
                }
            } catch (error) {
                console.log(error);
                alert("Não foi possível fazer o login")
            }
        } else {
            return;
        }
    }

    function validar() {
        if (!email || email === '') {
            alert('O email deve ser preenchido')
            return false
        }
        if (!password || password === '') {
            alert('A senha deve ser preenchida')
            return false
        }
        return true
    }

    return (
        <PageLogin>
            <LeftSideLogin></LeftSideLogin>
            <RightSideLogin>
                <SolarLogo src="./logo1.png"></SolarLogo>
                <p>Seja bem vindo</p>

                <FormLogin onSubmit={e => handleSubmit(e)} >

                    <Borda>
                        <InputText
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            required />
                    </Borda>
                    <Borda>
                        <InputText
                            type="password"
                            name="password"
                            placeholder="Senha"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            required />
                    </Borda>
                    <LoginButton name="btn" type="submit" >
                        Entrar
                    </LoginButton>
                </FormLogin>
            </RightSideLogin>
        </PageLogin>
    )
};