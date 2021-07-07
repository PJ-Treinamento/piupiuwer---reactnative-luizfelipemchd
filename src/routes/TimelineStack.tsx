import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import Timeline from "../pages/Timeline";
import MakePiuPage from "../pages/MakePiuPage";

const {Navigator, Screen} = createStackNavigator();

const TimelineStack = () => {
    
    return(
        <Navigator screenOptions={ { headerShown: false } }>
            <Screen name='Timeline' component={Timeline}/>
            <Screen name="MakePiuPage" component={MakePiuPage} />
        </Navigator>
    );
}

export default TimelineStack;