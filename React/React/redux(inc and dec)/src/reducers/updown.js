
const initialState = 0;


const changeTheNumber = (State =initialState, action) => {

    switch (action.type) {
        case "INCREMENT": return State + 1;
        case "DECREMENT": return State !==0? State-1:State;
        default: return State;
    }
}

export default changeTheNumber;
