import React from "react";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";
import MainTabs from "./MainTabs";

const Redirect = () => {
    const { user } = useAuth();

    // da pra fazer um componente retornando um componente Screen
    // mas assim me parece mais legal
    return (
        !!user ?  <MainTabs/> : <Login/>  
    );
} 

export default Redirect;