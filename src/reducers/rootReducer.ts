type CounterAction =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "RESET" }
    | { type: "DOUBLE" };

const initialState = 10


function rootReducer(state = initialState, action: CounterAction): number {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "RESET":
            return initialState
        case "DOUBLE":
            return state * 2
        default:
            return state
    }
}

export default rootReducer