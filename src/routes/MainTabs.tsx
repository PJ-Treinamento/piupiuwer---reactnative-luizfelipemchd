import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native"

import TimelineStack from "./TimelineStack";
import SearchPage from "../pages/SearchPage";

import HomeIcon from "../assets/home.png"
import SearchIcon from "../assets/search.png"

const { Navigator, Screen } = createBottomTabNavigator();

const MainTabs = () => {
    return(
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 50,
                },
                tabStyle: {
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                labelStyle: {
                    display: 'none',
                },
                iconStyle: {
                    flex: 0,
                    width: 15,
                    height: 15,
                },
                inactiveBackgroundColor: '#FFF',
                activeBackgroundColor: '#e5e5e5'
            }}
        >
            <Screen 
                name="TimelineStack" 
                component={TimelineStack}
                options={{
                    tabBarIcon: () => (<Image style={{height: 30, width: 30}} source={HomeIcon} />)
                }} 
            />
            <Screen 
                name="SearchPage" 
                component={SearchPage}
                options={{
                    tabBarIcon: () => (<Image style={{height: 30, width: 30}} source={SearchIcon} />)
                }} 
            />
        </Navigator>
    );
}

export default MainTabs;