import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import useAuth, { IUserData } from "../../hooks/useAuth";
import { AxiosResponse } from "axios";
import api from "../../services/api";

import hugeBird from "../../assets/passarinzao.png"
import showPassword from "../../assets/showPass.png"
import hidePassword from "../../assets/hidePass.png"

import { Bird, Container, EmailInput, EyeIconButton, InnerText, InputsWrapper, PasswordInput, PasswordWrapper, SendButton, SendButtonText, TextWrapper } from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Cred {
    email: string;
    password: string;
}


const Login = () =>{
    
    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [emailInfo, setEmailInfo] = useState("")
    const [passwordInfo, setPasswordInfo] = useState("")
    const { setUserData } = useAuth()

    function handlePasswordVisibility() {
        setPasswordVisibility(!passwordVisibility);
    }

    const login = async ({ email, password }: Cred) => {
        try{
            const response: AxiosResponse<IUserData> = await api.post('/sessions/login', {
                email,
                password,
            })

            return response.data;
        }catch(error){
            console.log(error);
            return {} as IUserData;
        } 
    };

    const loginRequest = async () => {
        
        const {user, token} = await login({ email: emailInfo, password: passwordInfo});
        

        if(user && token){ 
            try{
                setUserData( {user, token} as IUserData)
            }catch(e){
                console.log(e);
                
            }
            
            const userString = JSON.stringify(user);

            AsyncStorage.setItem("@Piupiuwer:token", token);
            AsyncStorage.setItem("@Piupiuwer:user", userString);
            
            api.defaults.headers.authorization = `Bearer ${token}`
        }
        
    }


    return (
        <Container>
            
            <Bird source={hugeBird}></Bird>

            <TextWrapper>
                <InnerText>Faça pius de qualquer lugar...</InnerText>
                <InnerText>Entre e se divirta!</InnerText>
            </TextWrapper>

            <InputsWrapper>

                <EmailInput
                    placeholder="E-mail"
                    value={emailInfo}
                    onChangeText={text => setEmailInfo(text)}
                />
                <PasswordWrapper>

                    <PasswordInput
                        placeholder="Senha"
                        secureTextEntry={passwordVisibility}
                        value={passwordInfo}
                        onChangeText={text => setPasswordInfo(text)}
                    />

                    <EyeIconButton onPress={handlePasswordVisibility} >
                        <Image source={passwordVisibility ? showPassword : hidePassword}/>
                    </EyeIconButton>
                </PasswordWrapper>

            </InputsWrapper>

            <SendButton onPress={loginRequest} >
                <SendButtonText>Entrar</SendButtonText>
            </SendButton>

        </Container>
    );
}

export default Login;