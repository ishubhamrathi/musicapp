import React, { useContext, useReducer, useEffect } from "react";
import Songs from "./components/Songs";
import reducer from "./reducer";
const AppContext = React.createContext();

const API = "https://saavn.me/search/songs?";
// const API = "https://hn.algolia.com/api/v1/search?"

const initialState = {
    isLoading : true,
    query : "songs",
    nbpage : 1,
    page : 1,
    hits : [],
    songLink : null
}

    const AppProvider = ({children}) =>{
  
    const [state, dispatch] = useReducer(reducer, initialState);
//fetch api dta
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
//play music
    const playMusic = (link) =>{
        dispatch({type:"UPDATE_LINK", payload : link[4].link});
    };
//search music
    const searchSong = (searchQuery)=>{
        dispatch({type:"SEARCH_QUERY", payload : searchQuery});
    };
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}&limit=2`);
    },[state.query]);


    return (
        <AppContext.Provider value={{...state, playMusic, searchSong}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext);   
}
export {AppContext, AppProvider , useGlobalContext}; 