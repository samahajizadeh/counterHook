import { createStore } from 'redux';

const reduserCounter = (state ={ counter : 0,showCounter:true},action) =>{
    if(action.type === 'Increament'){
        return {
           counter:state.counter+1,
           showCounter:state.showCounter
        }
    }
    if(action.type === "Decreament"){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }

    if(action.type === "Increase"){
        return{
            counter:state.counter + action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type ==="ShowCounter"){
        return{
            counter:state.counter,
            showCounter: !state.showCounter
        }
    }
    return state
}
const store = createStore(reduserCounter);
export default store;