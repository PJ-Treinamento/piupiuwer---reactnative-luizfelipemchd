import styled from "styled-components/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const InputWrapper = styled(View)`
    padding-top: 8px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ImageSearch = styled(Image)`
    width: 20px;
    height: 20px;
    margin-right: -24px;
`

export const TextSearch = styled(TextInput)`
    padding-left: 26px;
    font-size: 20px;
    width: 70%;
    height: 40px;
    border: 2px solid #e5e5e5;
`
