// select DOM elements
const counterElement = document.getElementById("count");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action){
        if(action.type === "INCREMENT"){
        return {
            ...state,
            value: state.value + 1,
        }
    }
    else if(action.type === "DECREMENT"){
        return {
            ...state,
            value: state.value - 1,
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
    const currentState = store.getState();
    counterElement.innerText = currentState.value.toString();
}

store.subscribe(render);

// create event listener
incrementElement.addEventListener("click", () => {
    store.dispatch({
        type: "INCREMENT"
    });
});

decrementElement.addEventListener("click", () => {
    store.dispatch({
        type: "DECREMENT"
    });
});