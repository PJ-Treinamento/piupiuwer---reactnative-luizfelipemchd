import React from "react";
import { Container, Logo, MakePiuButton, MakePiuImage, MakePiuText } from "./styles";

import LogoHeader from "../../assets/logo-header.png"
import MakePiuIcon from "../../assets/make-piu-icon.png"
import { useNavigation } from "@react-navigation/native";


const Header: React.FC = () => {
    const { navigate } = useNavigation(); 
    return (
        <Container>
            <Logo source={LogoHeader} />
            <MakePiuButton onPress={() => navigate('MakePiuPage')}>
                <MakePiuText>Piue</MakePiuText>
                <MakePiuImage source={MakePiuIcon}/>
            </MakePiuButton>
        </Container>
    );
}

export default Header;