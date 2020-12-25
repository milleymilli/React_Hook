import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as ACTIONS from './store/actions/actions'
import * as UserReducer from './store/hooks_state/user_input_hook_reducer';

//main app 
const App = () => {
  const [globalState, setGlobalState] = useState(0);
  const [globalReducerState, dispatchGlobalReducerState] = useReducer(Reducer.HooksReducers, Reducer.initialState)
  const [globalFormReducer, dispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState)

 const handdleDispatchonChange = (e) => {
    dispatch(ACTIONS.user_input_change(e.target.value));
  }
  const handdleDispatchonSubmit = (event) => {
    event.preventDefault();
    event.persist()
    dispatch(ACTIONS.user_input_submit(globalFormReducer.user_text_change));
  }

  const handdleDispatchTrue = () => {
    dispatchGlobalReducerState(ACTIONS.success());
  }
  const handdleDispatchFalse = () => {
    dispatchGlobalReducerState(ACTIONS.failure());
  }

  const incrementGlobalState = () => {
    setGlobalState((prev) => prev + 1)
  }
  const decrementGlobalState = () => {
    setGlobalState((prev) => prev - 1)
  }
  const resetGlobalState = () => {
    setGlobalState(0)
  }

  return (
    <div>
      <Context.Provider value={{
        state: globalState,
        incrementState: () => incrementGlobalState(),
        decrementState: () => decrementGlobalState(),
        resetState: () => resetGlobalState(),

        reducerState: globalReducerState.stateprop2,
        handdleGlobalDispatchTrue: () => handdleDispatchTrue(),
        handdleGlobalDispatchFalse: () => handdleDispatchFalse(),

         globalFormReduceronChange: globalFormReducer.user_text_change,
         globalFormReduceronSubmit: globalFormReducer.user_text_submit,
        handdleDispatchonSubmit: (e) => handdleDispatchonSubmit(e),
        handdleDispatchonChange: (e) => handdleDispatchonChange(e)
      }}>
        React Hook
        <Routes />
      </Context.Provider>
    </div>
  )
}



export default App;
