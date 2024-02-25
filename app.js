import store from "./redux/store.js";
import { increase, decrease, reset } from "./redux/actions/counterActions.js"; 


// store => getState(), dispatch()

console.log("initial Value", store.getState());

store.dispatch(increase()) //actoins details as objects
//store.dispatch({type: INCREASE})

console.log("after Increase", store.getState());


store.dispatch(increase()) //actoins details as objects
//store.dispatch({type: INCREASE, value:100})

console.log("after Increase", store.getState());
store.dispatch(increase()) //actoins details as objects
//store.dispatch({type: INCREASE, value:100})

console.log("after Increase", store.getState());
store.dispatch(increase(100)) //actoins details as objects
//store.dispatch({type: INCREASE, value:100})

console.log("after Increase", store.getState());