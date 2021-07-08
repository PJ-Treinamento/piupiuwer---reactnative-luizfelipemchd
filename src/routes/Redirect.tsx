import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";
import MainTabs from "./MainTabs";

const Redirect = () => {
    
    const { user } = useAuth();
    
    return (
        !!user ?  <MainTabs/> : <Login/>  
    );
} 

export default Redirect;