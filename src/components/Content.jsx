import React, { useState } from "react";
import Sidecolumn from "./Sidecolumn";

export default function content(props) {
  return (
    <div className="layout">
      {props.setContentData("maharana pratap")}
      <button onClick={() => props.setShowbar(prev=>!prev)}>Click to get the sidebar</button>
    </div>
  );
}
