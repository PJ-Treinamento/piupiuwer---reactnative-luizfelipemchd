import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { User } from "../models";
import api from "../services/api";
import { AxiosResponse } from "axios";

export interface IUserData{
    token: string;
    user: User;
}

interface IAuthContext{
    token: string;
    user: User;
    setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC = ({ children }) => {
    
    const [userData, setUserData ] = useState<IUserData>({} as IUserData)

    useEffect(() => {
        const getUserData = async () => {
            try{
                const token = await AsyncStorage.getItem('@Piupiuwer:token');
                const user = await AsyncStorage.getItem('@Piupiuwer:user');

                if (user && token) {
                    api.defaults.headers.authorization = `Bearer ${token}` 
                    setUserData( { token, user: JSON.parse(user) });
                }
            }catch(e){
                console.log(e);
                setUserData( {} as IUserData);
            }
            return {} as IUserData;
        }

        getUserData()
    }, [])
    
    useEffect( () => {
        const updateUser = async () =>{
            const userString = await AsyncStorage.getItem('@Piupiuwer:user')
            const user = userString ? JSON.parse(userString as unknown as string) : "";
            console.log(user)
            if(user && user !== userData.user){
                const response: AxiosResponse<User[]> = await api.get(`/users?username=${user.username}`, {})
                setUserData( { ...userData, user: response.data[0] })
                AsyncStorage.setItem("@Piupiuwer:user", JSON.stringify(user) )
            }
        }
        updateUser()
    }, [] )

    return(
        <AuthContext.Provider value={ { ...userData, setUserData }}>
            { children }
        </AuthContext.Provider>
    );
}

export default () => useContext(AuthContext)