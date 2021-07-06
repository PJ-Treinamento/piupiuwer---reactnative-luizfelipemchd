import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import Login from "../pages/Login";
import Timeline from "../pages/Timeline"
import { AuthProvider } from "../hooks/useAuth";
import Redirect from "./Redirect";

const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
    
    return(
        <NavigationContainer>
            <Navigator screenOptions={ { headerShown: false } }>
                <Screen name='Redirect' component={Redirect}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;