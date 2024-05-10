import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  const {showAlert, mode} = props;
  return (
    <div style={{color: props.mode=== 'dark'?'white':'#0f032d'}}>
      <Notes mode={mode} showAlert={showAlert} />
    </div>
  );
};

export default Home;
