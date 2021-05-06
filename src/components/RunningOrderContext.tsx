import {
  createContext,
  useState,
  useContext,
  useReducer,
  FC,
  Dispatch,
} from "react";
import {
  InitialStateType,
  RunningOrderActions,
  Types,
} from "../types/RunningOrder";

export const initialState: InitialStateType = {
  unorderedStacks: [
    {
      id: 0,
      gender: "M",
      catagory: "JR",
    },
    {
      id: 1,
      gender: "M",
      catagory: "A",
    },
    {
      id: 2,
      gender: "M",
      catagory: "B",
    },
    {
      id: 3,
      gender: "M",
      catagory: "C",
    },
    {
      id: 4,
      gender: "M",
      catagory: "D",
    },
    {
      id: 5,
      gender: "F",
      catagory: "JR",
    },
    {
      id: 6,
      gender: "F",
      catagory: "A",
    },
    {
      id: 7,
      gender: "F",
      catagory: "B",
    },
    {
      id: 8,
      gender: "F",
      catagory: "C",
    },
    {
      id: 9,
      gender: "F",
      catagory: "D",
    },
  ],
  orderedStacks: [
    {
      id: 0,
      stacks: [],
      title: "Group 1",
      break: 4,
    },
    {
      id: 1,
      stacks: [],
      title: "Group 2",
      break: 4,
    },
  ],
};

const RunningOrderContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<RunningOrderActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const RunningOrderContextProvider = RunningOrderContext.Provider;

function reducer(state: InitialStateType, action: RunningOrderActions) {
  switch (action.type) {
    case Types.Move:
      return state;
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

function useRunningOrderState() {
  const all = useContext(RunningOrderContext);
  return all;
}

export { useRunningOrderState, RunningOrderState, RunningOrderContext };
