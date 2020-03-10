import React, { useState } from "react";

export function Provider({ children, value }) {
  const stateContext = value.state;
  const setStateContext = value.setState;

  const [state, setState] = useState(stateContext._currentValue);

  return (
    <stateContext.Provider value={state}>
      <setStateContext.Provider value={setState}>
        {children}
      </setStateContext.Provider>
    </stateContext.Provider>
  );
}
