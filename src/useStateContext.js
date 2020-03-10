import { useContext } from "react";

export function useStateContext(contexts, name) {
  const context = contexts.find(context => context.name === name);
  const state = useContext(context.state);

  return state;
}
