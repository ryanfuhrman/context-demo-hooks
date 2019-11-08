import { useState } from "react";

function useToggle(initialVal = false) {
  const [state, isState] = useState();
  const toggle = () => {
    isState(!state);
  };
  return [state, toggle];
}

export default useToggle;
