
import React from "react";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/Header";
import PiuMade from "../../components/PiuMade";
import useAuth from "../../hooks/useAuth";
import usePiusList from "../../hooks/usePiusList";
import { Piu } from "../../models";

import searchIcon from "../../assets/search.png"
import { ImageSearch, InputWrapper, TextSearch } from "./styles";

const SearchPage = () => {
    const { piuList, setPiuList } = usePiusList();
    const {user} = useAuth();
    const [ piuFiltered, setPiuFiltered] = useState([] as Piu[]);

    const filterTheFuckingPiusPlease = (text: string) => {
        if(text){
            let filtredPius = piuList.filter(piu => piu.user.username.toLowerCase().includes(text.toLowerCase()))
            setPiuFiltered(filtredPius)
        }else{
            setPiuFiltered([])
        }
    } 



    return(
        <>
            <Header />
            <InputWrapper>
                <ImageSearch source={searchIcon}/>
                <TextSearch 
                    placeholder="Pesquise por nome..."
                    onChangeText={text => filterTheFuckingPiusPlease(text)}
                />
            </InputWrapper>
            <View>
            <ScrollView showsVerticalScrollIndicator={false}>
            {!!piuFiltered.length && piuFiltered.map( (piu: Piu) => <PiuMade username={piu.user.username} 
                                                    id={piu.id}
                                                    img={piu.user.photo} 
                                                    content={piu.text}
                                                    selfMade={piu.user.username === user.username}
                                                    piuListState={piu.user.username === user.username 
                                                        ? {pius: piuList, function: setPiuList }
                                                        : { pius: [] as Piu[], function: (() => {}) as React.Dispatch<React.SetStateAction<Piu[]>>} }
                                                    likes={piu.likes}
                                                    />)}
            </ScrollView>
            </View>
        </>
    )
}

export default SearchPage;