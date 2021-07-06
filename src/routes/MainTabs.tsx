import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TimelineStack from "./TimelineStack";
import SearchPage from "../pages/SearchPage";

const { Navigator, Screen } = createBottomTabNavigator();

const MainTabs = () => {
    return(
        <Navigator>
            <Screen name="TimelineStack" component={TimelineStack} />
            <Screen name="SearchPage" component={SearchPage}/>
        </Navigator>
    );
}

export default MainTabs;