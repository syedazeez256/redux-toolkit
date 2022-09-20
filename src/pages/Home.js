import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { c } = useSelector((state) => state.custom);
  const dispatch = useDispatch();
  const addbtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const subbtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const addbtnbyval = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25,
    });
  };
  return (
    <div>
      <h2>{c}</h2>

      <button onClick={addbtn}>Increment</button>
      <button onClick={addbtnbyval}>Increment by 25 </button>
      <button onClick={subbtn}>Decrement</button>
    </div>
  );
};

export default Home;
