import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../../components/Header";
import PiuMade from "../../components/PiuMade";
import useAuth from "../../hooks/useAuth";
import usePiusList from "../../hooks/usePiusList";
import { Piu } from "../../models";
import { Container } from "./styles";

const Timeline = () => {
    const { piuList, setPiuList, getPiuList } = usePiusList();
    const {user, token} = useAuth();

    useEffect( ()=>{
        getPiuList();
    }, [user] )

    console.log(piuList.length, "tamanhp")
    console.log(user, "user");
     
    return(
        <Container>
            <Header />
            <View style={{flex: 1, width: '100%', paddingHorizontal: 4}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    { piuList.length && user ? piuList.map( (piu: Piu) => <PiuMade username={piu.user.username} 
                                                        id={piu.id}
                                                        img={piu.user.photo} 
                                                        content={piu.text}
                                                        selfMade={piu.user.username === user.username}
                                                        piuListState={piu.user.username === user.username 
                                                            ? {pius: piuList, function: setPiuList }
                                                            : { pius: [] as Piu[], function: (() => {}) as React.Dispatch<React.SetStateAction<Piu[]>>} }
                                                        likes={piu.likes}
                                                        />)
                                    : <Text>Carregando...</Text>

                    }
                </ScrollView>
            </View>
        </Container>
    );
}

export default Timeline;