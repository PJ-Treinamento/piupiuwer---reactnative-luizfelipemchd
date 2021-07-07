import React from "react";
import { Container, Logo, MakePiuButton, MakePiuImage, MakePiuText } from "./styles";

import LogoHeader from "../../assets/logo-header.png"
import MakePiuIcon from "../../assets/make-piu-icon.png"

const Header = () => {
    return (
        <Container>
            <Logo source={LogoHeader} />
            <MakePiuButton>
                <MakePiuText>Piue</MakePiuText>
                <MakePiuImage source={MakePiuIcon}/>
            </MakePiuButton>
        </Container>
    );
}

export default Header;