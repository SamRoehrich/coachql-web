type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Initalize = "INITIALIZE",
  Add = "ADD",
  Move = "MOVE",
}

export interface Stack {
  id: number;
  gender: string;
  catagory: string;
}

export type Break = {
  time: string;
  id: number;
  gender: string;
  catagory: string;
};

type RunningOrderPayload = {
  [Types.Initalize]: {
    id: number;
    stacks: Stack[];
  };
  [Types.Add]: {
    id: number;
    position: number;
  };
  [Types.Move]: {
    id: number;
    to: number;
    from: number;
  };
};

export type GroupedStack = {
  id: number;
  title: string;
  stacks: Stack[];
  break: number;
};

export type InitialStateType = {
  unorderedStacks: Stack[];
  orderedStacks: GroupedStack[];
};

export type RunningOrderActions = ActionMap<RunningOrderPayload>[keyof ActionMap<RunningOrderPayload>];
