import { AxiosResponse } from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { Piu } from "../models"
import api from "../services/api";
import useAuth from "./useAuth";

interface IPiuListContext{
    piuList: Piu[];
    setPiuList: React.Dispatch<React.SetStateAction<Piu[]>>;
    getPiuList: () => Promise<void>;
}

const PiuListContext = createContext<IPiuListContext>({} as IPiuListContext)

export const PiuListProvider: React.FC = ( {children}) => {

    const [piuList, setPiuList] = useState<Piu[]>([] as Piu[]);
    
    const getPiuList = async () =>{
        try{
            const response: AxiosResponse<Piu[]> = await api.get("/pius", {});
            setPiuList(response.data)

        }catch(error){
            console.log(error)
            setPiuList( [] as Piu[])
        }
    }

    return(
        <PiuListContext.Provider value={ {piuList: piuList, setPiuList: setPiuList, getPiuList: getPiuList} }>
            { children }
        </PiuListContext.Provider>
    );
}

export default () => useContext(PiuListContext)