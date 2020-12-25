import React, { useState, useReducer, useContext } from "react";
import * as ACTIONS from "../store/actions/actions";
import * as UserReducer from "../store/hooks_state/user_input_hook_reducer";
import Context from "../utils/context";

const HooksForm = () => {
  const [valueChange, setValueChange] = useState("");
  const [valueSubmit, setValueSubmit] = useState("");
  const [nameReducer, dispatchName] = useReducer(
    UserReducer.UserReducer,
    UserReducer.initialState
  );

  const context = useContext(Context);

  const handdleUseStateChange = (event) => {
    setValueChange(event.target.value);
  };
  const handdleUseStateOnsubmit = (event) => {
    event.preventDefault();
    //setValueSubmit(event.target.useState.value);
    setValueSubmit(valueChange);
  };

  const handdleReducerChange = (e) => {
    dispatchName(ACTIONS.user_input_change(e.target.value));
  };
  const handdleReducerSubmit = (e) => {
    e.preventDefault();
    // dispatchName(ACTIONS.user_input_submit(e.target.useReducer.value));
    dispatchName(ACTIONS.user_input_submit(nameReducer.user_text_change));
  };

  console.log(nameReducer.user_text_submit);
  return (
    <div>
      <hr />
      <div>
        <form onClick={handdleUseStateOnsubmit}>
          <label>
            <b>React useState:</b>
            <input type="text" id="useState" onChange={handdleUseStateChange} />
          </label>
          <button type="button">Submit</button>
        </form>
        onchange name on Change : <b>{valueChange}</b>
        <br />
        Your name on Submit is : <b>{valueSubmit}</b>
      </div>
      <hr />
      <div>
        <form onChange={handdleReducerChange}>
          <label>
            <b>React useReducer:</b>
            <input type="text" id="useReducer" />
          </label>
          <button type="button" onClick={handdleReducerSubmit}>
            Submit
          </button>
        </form>
        Your name is onChange : <b>{nameReducer.user_text_change}</b>
        <br />
        Your name on Submit is : <b>{nameReducer.user_text_submit}</b>
      </div>
      <hr />
      <div>
        <form onChange={context.handdleDispatchonChange}>
          <label>
            <b>React useContext:</b>
            <input type="text" id="useContext" />
          </label>
          <button type="button" onClick={context.handdleDispatchonSubmit}>
            Submit
          </button>
        </form>
        <br />
        Your name is onChange : <b>{context.globalFormReduceronChange}</b>
        <br />
        Your name on Submit is : <b>{context.globalFormReduceronSubmit}</b>
      </div>
    </div>
  );
};

export default HooksForm;
