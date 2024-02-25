import { INCREASE, DECREASE, RESET } from "./actionType.js";

//actions are objects

//action creator are functions that return objs

    export const increase = (value=1) =>{
        return{
            type: INCREASE,
            value: value
        }
    }
    export const decrease = () =>{
        return{
            type: DECREASE
        }
    }
    export const reset = () =>{
        return{
            type: RESET
        }
    }