const reducer = (state, action) =>{
    switch(action.type){
        case "GET_SONGS" : 
            return {
                ...state,
                hits : action.payload.hits,
                isLoading : false

            }
        case "SET_LOADING" :
            return {
                ...state,
                isLoading : true
            }
        case "UPDATE_LINK" :
            return {
                ...state,
                songLink : action.payload
            }
        case "SEARCH_QUERY" :
            return {
                ...state,
                query : action.payload
            }
    }
    return state;
};

export default reducer;
