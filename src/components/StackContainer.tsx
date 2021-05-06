import { FC } from "react";
import { useDrop } from "react-dnd";
import { useRunningOrderState } from "./RunningOrderContext";

interface StackContainerProps {
  index: number;
}

const StackContainer: FC<StackContainerProps> = ({ index, children }) => {
  const { state, dispatch } = useRunningOrderState();
  const [collected, add] = useDrop(() => ({
    accept: "stack",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
      didDrop: monitor.didDrop(),
    }),
    drop: (item: any, monitor) => console.log(index),
  }));
  return (
    <div className="w-1/5 h-32 border" ref={add}>
      {children}
    </div>
  );
};

export default StackContainer;
