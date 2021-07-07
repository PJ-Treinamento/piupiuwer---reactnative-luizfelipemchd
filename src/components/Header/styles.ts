import styled from "styled-components/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    margin-top: 16px;
    border-bottom-color: #969696;
    border-bottom-width: 2px;

`

export const Logo = styled(Image)`
    margin-left: 16px;
    height: 100%;
    width: 220px;
`

export const MakePiuButton = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70px;
    margin-right: 16px;
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    padding: 4px;
`

export const MakePiuText = styled(Text)`
    font-weight: bold;
`
export const MakePiuImage = styled(Image)`
    height: 20px;
`
