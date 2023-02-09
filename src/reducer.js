const reducer = (state, action) =>{
    switch(action.type){
        case "GET_SONGS" : 
            return {
                ...state,
                hits : action.payload,
            }
    }
    return state;
};

export default reducer;
