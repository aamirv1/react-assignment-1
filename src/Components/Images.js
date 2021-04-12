import React, { useState, useEffect } from "react";
export default function Images() {
  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1447&q=80",
    "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1517672651691-24622a91b550?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  ]);
  function ShowImage() {
    return images.map((image) => {
      return (
        <div className="img">
          <center>
            <img src={image} width="250" />
          </center>
        </div>
      );
    });
  }
  function handleAdd() {
    setimages([
      ...images,
      "https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ]);
  }
  return (
    <div>
      <div className="container">
        <ShowImage />
      </div>
      <button onClick={handleAdd} className="tglbtn">
        Toggle
      </button>
    </div>
  );
}
