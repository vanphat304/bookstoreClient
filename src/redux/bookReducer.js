import {POST_LIST_BOOK} from "./action/type"

const initialState = {
    books: [],
  };
  
  

  export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_LIST_BOOK:{
        console.log("acction",action);
         [...state.books] = action.data;
        return { ...state };
      }
      
      default:
        return state;
    }
  };
  