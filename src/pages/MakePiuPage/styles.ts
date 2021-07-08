import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components";

interface IAlertUser{
    display: boolean;
}

export const MakePiuWrapper = styled(View)`
    width: 100%;
    align-items: center;
`
export const UpperItems = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    padding: 8px;
`

export const GoBack = styled(TouchableOpacity)`

`

export const ItemsCounter = styled(Text)``

export const TextCounter = styled(Text)<IAlertUser>`
    display: ${props => props.display ? 'flex' : 'none' };
`


export const AlertUser = styled(Text)<IAlertUser>`
    display: ${props => props.display ? 'flex' : 'none' };
    margin-bottom: 16px;
    font-weight: bold;
    color: red;
    font-size: 16px;
`

export const SendPiuText = styled(Text)`
    font-weight: bold;
    color: white;
`

export const SendPiu = styled(TouchableOpacity)`
    background-color: black;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    max-width: 100px;
    height: 32px;
    border-radius: 8px;
`

export const WritePiu = styled(TextInput)`
    width: 95%;
    height: 200px;
    font-size: 24px;
    justify-content: flex-start;
    align-items: flex-start;
`