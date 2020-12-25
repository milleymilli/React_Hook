import React, { useState, useEffect, useReducer, useContext } from "react";
import * as Reducer from "../store/hooks_state/hooks_reducer";
import * as ACTIONS from "../store/actions/actions";
import Context from "../utils/context";

//main app
const HooksConatiner1 = () => {
  const [value, setValue] = useState(0);
  const [stateUseEffect, setStateUseEffect] = useState("");
  const [state, dispatch] = useReducer(
    Reducer.HooksReducers,
    Reducer.initialState
  );
  const context = useContext(Context);
  useEffect(
    () => {
      setTimeout(() => setStateUseEffect("useEffect Worked!"), 3000);
    },
    [value]
  );

  const handdleDispatchTrue = () => {
    dispatch(ACTIONS.success());
  };
  const handdleDispatchFalse = () => {
    dispatch(ACTIONS.failure());
  };

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };
  const changeUseEffect = () => {
    setStateUseEffect("useEffect changed");
  };
  return (
    <div>
      <div>
        <h1>Hook Milley!!</h1>

        <div>
          useEffect initial value: <b>{stateUseEffect}</b>
          <br />
          <br />
          <hr />
          Local useState initial value: <b>{value}</b>
          <br />
          <br />
          <button onClick={() => increment()}>Increase</button>
          <button onClick={() => decrement()}>Decrease</button>
          <button onClick={() => reset()}>Reset</button>
          <button onClick={() => changeUseEffect()}>changeUseEffect</button>
        </div>
        <hr />
        <div>
          Global useState initial value: <b>{context.state}</b>
          <br />
          <br />
          <button onClick={context.incrementState}>Increase</button>
          <button onClick={context.decrementState}>Decrease</button>
          <button onClick={context.resetState}>Reset</button>
        </div>
        <hr />
        <div>
          {state.stateprop1 ? (
            <p>
              Local state prop1 is <b>true</b>
            </p>
          ) : (
            <p>
              Local state prop1 is <b>false</b>
            </p>
          )}
          <button onClick={() => handdleDispatchTrue()}>
            Local-Dispatch-True
          </button>
          <button onClick={() => handdleDispatchFalse()}>
            Local-Dispatch-False
          </button>
        </div>
        <hr />
        <div>
          {context.reducerState ? (
            <p>
              Global state prop2 is <b>true</b>
            </p>
          ) : (
            <p>
              Global state prop2 is <b>false</b>
            </p>
          )}
          <button onClick={context.handdleGlobalDispatchTrue}>
            Global-Dispatch-True
          </button>
          <button onClick={context.handdleGlobalDispatchFalse}>
            Global-Dispatch-False
          </button>
        </div>
      </div>
    </div>
  );
};

export default HooksConatiner1;
