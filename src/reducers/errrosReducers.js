import { types } from "../constants/types";

const initialState = {
    errors:[]
}

export const errorsReducer = () =>{

    switch (action.type) {
        case types.errorAdd:
            return {
                ...state,
                errors:[...state.errors,action.payload]
            }
        case types.errorDelete:
            return {
                ...state,
                errors:state.errors.filter( error => 
                    (error.id !== action.payload )
                    )
            }
        default:
            break;
    }
}