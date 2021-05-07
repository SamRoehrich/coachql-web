import { FC } from "react";
import { Stack } from "../../generated/graphql";
import { currentStackVar } from "../../graphql/cache";
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
        {stack.gender}
        <div className="flex space-x-5">{stack.catagory}</div>
      </div>
    </li>
  );
};

const StackList: FC<Props> = ({ stacks }) => {
  return (
    <div className="w-1/5">
      <ul>
        {stacks.map((stack: Stack) => (
          <StackItem stack={stack} key={stack.id} />
        ))}
      </ul>
    </div>
  );
};

export default StackList;
