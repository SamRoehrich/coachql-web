import { FC } from "react";
import { Stack } from "../../generated/graphql";
import Modal from "./StackModal";

interface Props {
  stacks: any;
}

interface StackItemProps {
  stack: any;
}

const StackItem: FC<StackItemProps> = ({ stack }) => {
  return (
    <li key={stack.id}>
      <div className="flex justify-between">
        {stack.male ? <p>Male</p> : <p>Female</p>}
        <div>
          {stack.jr ? <p>JR</p> : ""}
          {stack.a ? <p>A</p> : ""}
          {stack.b ? <p>B</p> : ""}
          {stack.c ? <p>C</p> : ""}
          {stack.d ? <p>D</p> : ""}
        </div>
      </div>
    </li>
  );
};

const StackList: FC<Props> = ({ stacks }) => {
  return (
    <div className="w-1/5">
      <ul>
        {stacks.map((stack: Stack) => (
          <StackItem stack={stack} />
        ))}
      </ul>
      <Modal />
    </div>
  );
};

export default StackList;
