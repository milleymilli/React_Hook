import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions'
//main app 
const HooksConatiner1 = () => {
    const [value, setValue] = useState(0);
    const [stateUseEffect, setStateUseEffect] = useState('');
    //const [state, dispatch] = useReducer(reducer,initialSatet)
    const [state, dispatch] = useReducer(Reducer.HooksReducers, Reducer.initialState);

    const handdleDispatchTrue = () => {
        dispatch(ACTIONS.success());
    }
    const handdleDispatchFalse = () => {
        dispatch(ACTIONS.failure());
    }

    useEffect(() => {
        setTimeout(() => setStateUseEffect('useEffect Worked!'), 3000);
    }, [value])
    const increment = () => {
        setValue(value + 1);
    }
    const decrement = () => {
        setValue(value - 1);
    }
    const reset = () => {
        setValue(0);
    }
    const changeUseEffect = () => {
        setStateUseEffect('useEffect changed')
    }
    return (
        <div>
            Hook Milley!!
            <br />
            <br />
            Local state initial value: <u>{value}</u>
            <br />
            <br />
            <button onClick={() => increment()}>Increase</button>
            <button onClick={() => decrement()}>Decrease</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => changeUseEffect()}>changeUseEffect</button>
            <br />
            <br />
            useEffect initial value: <b>{stateUseEffect}</b>
            <br />
            <br />
            <button onClick={() => handdleDispatchTrue()}>Dispatch-True</button>
            <button onClick={() => handdleDispatchFalse()}>Dispatch-False</button>
            <br />
            {state.stateprop1
                ? <p>State prop1 is <b>true</b></p>
                : <p>State prop1 is <b>false</b></p>}
        </div>
    )
}



export default HooksConatiner1;