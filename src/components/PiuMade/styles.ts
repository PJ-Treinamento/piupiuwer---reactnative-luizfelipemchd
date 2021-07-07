import { View, Image, ImageProps, Text } from "react-native";
import styled from "styled-components";

interface ILike extends ImageProps{
    liked: boolean;
}

export const PiuWrapper = styled(View)`
    width: 100%;
    flex-direction: column;
    border-width: 2px;
    border-color: #e5e5e5;
    border-style: solid;
    margin-top: 8px;
    padding: 8px;
      
`
export const UserName = styled(Text)`
    font-weight: bold;
    margin-bottom: 8px;
`



export const PiuDisplay = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ImgWrapper = styled(View)`
    
    width: 80px;
    height: 80px;
    border-radius: 40px;
    border: 3px solid black;
    overflow: hidden;
    margin-left: 2px;
    margin-right: 4px;
    z-index: 3;

`

export const ProfileImage = styled(Image)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BalloonWrapper = styled(View)`
    width: 70%;
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 4px;
    border-width: 1px;
    border-color: #000;
    border-style: solid;
`

export const InteractOptions = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
   
`

export const RightSide = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const LikeWrapper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 8px;
`

export const Like = styled(Image)<ILike>`
    margin-left: 2px;
    border-radius: 12px;
    border: ${props => props.liked ? "2px solid gold" : "none"};
`

export const Delete = styled(View)`

`