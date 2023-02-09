import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const API = "https://saavn.me/search/songs?";
// const API = "https://hn.algolia.com/api/v1/search?"

const initialState = {
    isLoading : true,
    query : "bhartar",
    nbpage : 1,
    page : 1,
    hits : [],
    songLink : null
}

    const AppProvider = ({children}) =>{
  
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) =>{
        dispatch({type:"SET_LOADING"});
        try {
        const res = await fetch(url);
        const Data = await res.json();
        console.log(Data);
            dispatch({
            type : "GET_SONGS",
            payload : {
                hits : Data.data.results,
            }
        });
        console.log(state.hits)
        // isLoading=false;
        } catch (error) {
        console.log(error);
        }
    }

    const playMusic = (link) =>{
        dispatch({type:"UPDATE_LINK", payload : link[0].link});
    }
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}&limit=2`);
        // fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[]);


    return (
        <AppContext.Provider value={{...state, playMusic}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext);   
}
export {AppContext, AppProvider , useGlobalContext}; 