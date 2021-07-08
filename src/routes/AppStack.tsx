import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import Redirect from "./Redirect";
import { PiuListProvider } from "../hooks/usePiusList";

const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
    
    return(
        <PiuListProvider>
            <NavigationContainer>
                <Navigator screenOptions={ { headerShown: false } }>
                    <Screen name='Redirect' component={Redirect}/>
                </Navigator>
            </NavigationContainer>
        </PiuListProvider>
    );
}

export default AppStack;