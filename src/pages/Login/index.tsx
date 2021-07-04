import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles"

import hugeBird from "../../assets/passarinzao.png"
import showPassword from "../../assets/showPass.png"
import hidePassword from "../../assets/hidePass.png"
import { useState } from "react";

const Login = () =>{

    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [emailInfo, setEmailInfo] = useState("")
    const [passwordInfo, setPasswordInfo] = useState("")

    function handlePasswordVisibility() {
        setPasswordVisibility(!passwordVisibility);
    }

    function doLogin(){
        console.log("senha", passwordInfo)
        console.log("email", emailInfo)
        setPasswordInfo("")
        setEmailInfo("")
    }


    return (
        <View style={styles.container}>
            <Image source={hugeBird} style={styles.bird}></Image>
            <View style={styles.text}>
                <Text style={styles.innerText}>Faça pius de qualquer lugar...</Text>
                <Text style={styles.innerText}>Entre e se divirta!</Text>
            </View>

            <View style={styles.inputs}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="E-mail"
                    value={emailInfo}
                    onChangeText={text => setEmailInfo(text)}
                />
                <View style={styles.passwordWrapper}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Senha"
                        secureTextEntry={passwordVisibility}
                        value={passwordInfo}
                        onChangeText={text => setPasswordInfo(text)}
                    />
                    <TouchableOpacity onPress={handlePasswordVisibility} style={styles.eye}>
                        <Image source={passwordVisibility ? showPassword : hidePassword}/>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={doLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Login;