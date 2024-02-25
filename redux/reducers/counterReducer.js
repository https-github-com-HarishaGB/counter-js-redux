import { INCREASE, DECREASE, RESET } from "../actions/actionType.js";


const initialState = {count:0}

//counterReducer() =>
//counterReducer( {count:0}, {type:INCREASE})

//counterReducer( {count:3}, {type:INCREASE, value: 100})

const counterReducer = (state = initialState, action) =>{

    switch(action.type){

        case INCREASE:
            return{...state, count:state.count + action.value}

        case DECREASE:
            return{...state, count:state.count - 1}

        case RESET:
            return{...state, count:0}

         default:
            return initialState;   
    }
}

export default counterReducer;