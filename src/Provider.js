import React from "react";

export function Provider({ children, value }) {
  const stateContext = value.state;
  const setStateContext = value.setState;

  const [state, setState] = React.useState(stateContext._currentValue);

  return (
    <stateContext.Provider value={state}>
      <setStateContext.Provider value={setState}>
        {children}
      </setStateContext.Provider>
    </stateContext.Provider>
  );
}
