import React from "react";
import { useNavigation } from "@react-navigation/native"
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";
import Timeline from "../pages/Timeline";

const Redirect = () => {
    
    const { user } = useAuth();

    console.log(user);
    
    return (
        !!user ?  <Timeline/> : <Login/>  
    );
} 

export default Redirect;