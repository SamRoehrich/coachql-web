import {
  createContext,
  useState,
  useContext,
  useReducer,
  FC,
  Dispatch,
} from "react";

enum ActionKind {
  "MOVE",
}

interface Stack {
  id: number;
  items: any[];
}

type State = {
  unorderedStacks: Stack[];
  orderedStacks: Stack[];
};

type Action = {
  type: ActionKind;
  payload: {};
};

const initialState: State = {
  unorderedStacks: [],
  orderedStacks: [],
};

const RunningOrderContext = createContext(initialState);

const RunningOrderContextProvider = RunningOrderContext.Provider;

function reducer(state: State, action: Dispatch<Action>): State {
  switch (action.type) {
    default:
      return state;
  }
}

const RunningOrderState: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const defaultValues = { state, dispatch };
  return (
    <RunningOrderContextProvider value={defaultValues}>
      {children}
    </RunningOrderContextProvider>
  );
};

export default RunningOrderState;
