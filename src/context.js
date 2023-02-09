import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const API = "https://saavn.me/search/songs?";

const initialState = {
    isLoading : true,
    query : "sample yara ke",
    nbpage : 1,
    page : 1,
    hits : []
}

    const AppProvider = ({children}) =>{
    let isLoading = false;
  
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) =>{
        try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dispatch({
            type : "GET_SONGS",
            payload : {
                hits : data.data
            }
        });
        console.log(state.hits)
        isLoading=false;
        } catch (error) {
        console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}&limit=2`);
    },[]);



    if (isLoading){
        return <>
            <h1>Loading...</h1>
        </>
      }

    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext);   
}
export {AppContext, AppProvider , useGlobalContext}; 