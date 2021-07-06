import  styled  from "styled-components/native";


export const Container = styled.View`
        background-color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
`

export const Bird = styled.Image`
    margin-top: 40px;
`
export const TextWrapper = styled.View`

    margin-top: 25px;
    align-self: flex-start;
    margin-left: 16px;
`

export const InnerText = styled.Text`
    font-size: 20px;
    margin-bottom: 8px;
`
export const InputsWrapper = styled.View`
    margin-top: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const EmailInput = styled.TextInput`
    background-color: #e5e5e5;
    width: 75%;
    height: 50px;
    font-size: 16px;
    padding: 8px;
    border-radius: 8px;
`

export const PasswordWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-top: 8px;
`

export const PasswordInput = styled.TextInput`
    background-color: #e5e5e5;
    font-size: 16px;
    width: 76%;
    height: 50px;
    padding: 8px;
    border-radius: 8px;

`

export const EyeIconButton = styled.TouchableOpacity`
    margin-left: -37px;
`

export const SendButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 40px;
    background-color: #000;
    width: 50%;
    height: 50px;
    border-radius: 8px;
`
export const SendButtonText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`