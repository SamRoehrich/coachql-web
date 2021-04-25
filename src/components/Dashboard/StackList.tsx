import { FC } from "react";
import { Stack } from "../../generated/graphql";
import { currentStackVar } from "../../graphql/cache";
import Modal from "./StackModal";

interface Props {
  stacks: any;
}

interface StackItemProps {
  stack: any;
}

const StackItem: FC<StackItemProps> = ({ stack }) => {
  const handleClick = () => currentStackVar(stack);
  return (
    <li key={stack.id} onClick={handleClick}>
      <div className="flex justify-between">
        {stack.male ? <p>Male</p> : <p>Female</p>}
        <div className="flex space-x-5">
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
