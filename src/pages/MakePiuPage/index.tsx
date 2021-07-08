import React, { useState } from "react";
import { Image } from 'react-native'
import { AlertUser, GoBack, ItemsCounter, MakePiuWrapper, SendPiu, SendPiuText, TextCounter, UpperItems, WritePiu } from "./styles";

import arrow from "../../assets/Arrow.png"
import { useNavigation } from "@react-navigation/core";
import api from "../../services/api";
import usePiusList from "../../hooks/usePiusList";

const MakePiuPage = () => {
    const { getPiuList } = usePiusList();
    const [warningText, setWarningText] = useState<string>("");
    const [newPiu, setNewPiu] = useState<string>("");
    const { goBack } = useNavigation() 

    const LaunchNewPiu = async () => {
        if(newPiu.length === 0){
            setWarningText("Vazio é so você: Escreva alguma coisa")
        }
        else if(newPiu.length > 140){
            setWarningText("Ninguém quer saber tanto assim!")
        }
        else{
            try{
                await api.post("/pius", { text: newPiu })
                setWarningText("");
                setNewPiu("");
                getPiuList();
                goBack();
            }catch(error){
                console.log(error);
            }
        }
    }

    return(
        <MakePiuWrapper>

            <UpperItems>
                <GoBack onPress={goBack}><Image source={arrow} /></GoBack>
                <ItemsCounter></ItemsCounter>
                <TextCounter display={newPiu.length > 0}>{newPiu.length}/140</TextCounter>
                <SendPiu onPress={LaunchNewPiu}>
                    <SendPiuText>Piuzar</SendPiuText>
                </SendPiu>
            </UpperItems>

            <AlertUser 
            display={ 
                    ((warningText === "Vazio é so você: Escreva alguma coisa") && !!!newPiu)
                    || ((warningText === "Ninguém quer saber tanto assim!") && (newPiu.length > 140))
            }>
                {warningText}
            </AlertUser>

            <WritePiu 
                placeholder="Abre o bico..."
                value={newPiu}
                onChangeText={text => setNewPiu(text)}
                multiline={true}
            />

        </MakePiuWrapper>
    )
}

export default MakePiuPage;