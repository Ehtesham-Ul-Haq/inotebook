import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "ihtisham",
    class: "10th",
  };

  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({ name: "farhan", class: "10th" });
    }, 3000);
  };
  return (
    <NoteContext.Provider value={{state, update}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
