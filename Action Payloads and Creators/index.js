// select DOM elements
const counterElement = document.getElementById("count");
const incrementElement = document.getElementById("increment");
const incrementElementByThree = document.getElementById("incrementBy_3");
const decrementElement = document.getElementById("decrement");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const actionIncrement = function (value){
    return {
        type: INCREMENT,
        payload: value
    }
}

const actionDecrement = function (value){
    return {
        type: DECREMENT,
        payload: value
    }
}

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action){
    if(action.type === INCREMENT){
        return {
            ...state,
            value: state.value + action.payload,
        }
    }
    else if(action.type === DECREMENT){
        return {
            ...state,
            value: state.value - action.payload,
        }
    }
    else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

// for render html
const render = () => {
    const currentState= store.getState();
    counterElement.innerText = currentState.value.toString();
}

store.subscribe(render);

// create event listener
incrementElement.addEventListener("click", () => {
    store.dispatch(actionIncrement(1));
});

incrementElementByThree.addEventListener("click", () => {
    store.dispatch(actionIncrement(3));
})

decrementElement.addEventListener("click", () => {
    store.dispatch(actionDecrement(1));
});