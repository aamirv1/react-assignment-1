import React, { useState } from "react";
import Images from "./Components/Images";
import "./index.css";

function App() {
  const [title, setTitle] = useState("Hello React from aamirv1");
  const [isShowing, setIsShowing] = useState(false);

  function handleClick() {
    setIsShowing(!isShowing);
    setTitle("Some Cars Images");
  }
  return (
    <div>
      <center>
        <div className="title">{title}</div>
        <button onClick={handleClick} className="tglbtn">
          Toggle Image
        </button>
      </center>
      {isShowing ? <Images /> : null}
    </div>
  );
}

export default App;
