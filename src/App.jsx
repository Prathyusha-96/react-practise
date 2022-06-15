import "./styles.css";
import React, { useState } from "react";

export default function App() {
  // counter
  const [counter, setCounter] = useState(0);
  // text
  const [text, setText] = useState("hello");
  // liked
  const [liked, setLiked] = useState(true);
  // form two variables
  const [name, setName] = useState("pinky");
  const [age, setAge] = useState(25);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const changehandler = (e) => {
    setLiked(e.target.checked);
  };
  return (
    <div>
      <div> {counter} </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>
        {/*  */}
        <input value={text} onChange={handleChange} />
        <p>You typed {text} </p>
        <button onClick={() => setText("hello")}>reset</button>
      </div>
      {/*  */}
      <div>
        <label>
          <input type="checkbox" checked={liked} onChange={changehandler} />I
          liked this
        </label>
        <p>you {liked ? "liked" : "did not like"} this.</p>
      </div>
      {/*  */}

      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setAge(age + 1)}>increment age</button>
        <p>
          hello {name} you are {age}
        </p>
      </div>
    </div>
  );
}
