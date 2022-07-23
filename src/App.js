import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { addItem, done, remove } from "./listSlice";

export default () => {
  const [inputvalue, setinputvalue] = useState(10);
  const [text, setText] = useState("");
  const count = useSelector((state) => {
    return state.counter.meqdar;
  });
  const list = useSelector((state) => {
    return state.list.list;
  });
  const dispatch = useDispatch();

  console.log(list);
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <input
          type="number"
          value={inputvalue}
          onChange={(e) => setinputvalue(Number(e.target.value))}
        />

        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={() => dispatch(incrementByAmount(inputvalue))}>
          {" "}
          increment by value{" "}
        </button>
      </div>

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          if (!text) return;
          dispatch(addItem({ text, isDone: false }));
          setText("");
        }}
      >
        add item
      </button>

      <ul>
        {list.map((item, index) => {
          return (
            <li
              style={{ textDecoration: item.isDone ? "line-through" : "none" }}
            >
              {item.text}
              <button
                onClick={() => {
                  dispatch(done(index));
                }}
              >
                done{" "}
              </button>
              <button onClick={() => dispatch(remove(index))}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
