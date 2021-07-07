import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Piu, PiuLike } from "../../models";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

import {  BalloonWrapper, Delete, ImgWrapper, InteractOptions, Like, LikeWrapper, PiuDisplay, PiuWrapper, ProfileImage, RightSide, UserName } from "./styles";
import { Image } from "react-native";
import { View } from "react-native";
import  like from "../../assets/like.png"
import fav from "../../assets/fav.png"
import faved from "../../assets/faved.png"
import deletePiu from "../../assets/delete.png"
import stdPic from "../../assets/goProfile.png"

interface PiuMadeProps{
    username: string;
    img: string;
    id: string;
    content: string;
    likes: PiuLike[];
    selfMade: boolean;
    piuListState?: { pius: Piu[], function: React.Dispatch<React.SetStateAction<Piu[]>>};
}

const PiuMade: React.FC<PiuMadeProps> = (props) =>{
    const [likeNumber, setLikeNumber] = useState<Number>(props.likes.length)
    const { user } = useAuth()
    const [situation, setSituation] = useState< {isLiked:boolean, isFaved: boolean} >( () => {
        const liked = props.likes.some( piuLike => piuLike.user.id === user.id)
        const favorited = user.favorites.some( piu => piu.id === props.id)
        return {isLiked: liked, isFaved: favorited} 
    })

    
    const favToogle = async () => {
        if(situation.isFaved){
            try{
                await api.post("/pius/unfavorite", { piu_id: props.id})
            }catch(error){
                console.log(error)
            }
        }else{
            try{
                await api.post("/pius/favorite", { piu_id: props.id})
            }catch(error){
                console.log(error)
            }
        }

        setSituation( { ...situation, isFaved: !situation.isFaved })
    }

    const likeToogle = async () => {
        try{
            await api.post("/pius/like", { piu_id: props.id })
            setSituation( { ...situation, isLiked: !situation.isLiked })
            setLikeNumber( Number(likeNumber) + (situation.isLiked ?  -1 : 1) )
        }catch(error){
            console.log(error)
        }
    } 

    const erasePiu = async () => {
        // try{
        //     await api.delete("/pius", { data: { piu_id: props.id }})
        //     props.piuListState.function( props.piuListState.pius.filter( piu => piu.id !== props.id ))
        // }catch(error){
        //     console.log(error)
        // }
    }

    return (
        <PiuWrapper>
            <UserName>{props.username}</UserName>

            <PiuDisplay>

                <ImgWrapper>
                    <ProfileImage source={props.img || stdPic} />
                </ImgWrapper>
                
                <BalloonWrapper>
                    <Text>{props.content}</Text>
                </BalloonWrapper>
            
            </PiuDisplay>

            <InteractOptions>
            
                <RightSide>
                    <LikeWrapper>
                        <Text>{likeNumber}</Text>
                        <TouchableOpacity onPress={likeToogle}>
                            <Like source={like}  liked={situation.isLiked}/>
                        </TouchableOpacity>
                    </LikeWrapper>
                    <TouchableOpacity onPress={favToogle}>
                        <Image style={{height: 35, width: 35 }} source={situation.isFaved ? faved : fav}/>
                    </TouchableOpacity>
                </RightSide>

                <Delete>
                    {props.selfMade && <TouchableOpacity onPress={erasePiu}><Image source={deletePiu} /></TouchableOpacity>}   
                </Delete>
            </InteractOptions>
        </PiuWrapper>
    );
}

export default PiuMade;