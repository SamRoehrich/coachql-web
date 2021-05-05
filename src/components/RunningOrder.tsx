import { FC, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

interface ItemProps {
  onDropItem?: (item: string) => {};
  text: string;
  index: number;
}

interface StackContainerProps {
  id: number;
}

const Item: FC<ItemProps> = ({ text, index }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    item: { index: index },
    type: "stack",
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(item);
        console.log(dropResult);
      }
    },
  }));
  return isDragging ? (
    <div ref={dragPreview}>
      <li>{text}</li>
    </div>
  ) : (
    <div ref={drag}>
      <li>{text}</li>
    </div>
  );
};

const StackContainer: FC<StackContainerProps> = ({ id }) => {
  const [collected, add] = useDrop(() => ({
    accept: "stack",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
      didDrop: monitor.didDrop(),
    }),
    drop: (item: any, monitor) => console.log(id),
  }));
  return (
    <div className="w-1/5 h-32 border" ref={add}>
      <ul></ul>
    </div>
  );
};

const RunningOrderTab: FC = () => {
  const [collected, add] = useDrop(() => ({
    accept: "stack",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
      didDrop: monitor.didDrop(),
    }),
    drop: (item: any, monitor) =>
      console.log(item.index + monitor.getDropResult()),
  }));
  const [{ isOver: isOverList }, remove] = useDrop(() => ({
    accept: "stack",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
      didDrop: monitor.didDrop(),
    }),
    drop: (item, monitor) => console.log(monitor.getDropResult()),
  }));

  const [items, setItems] = useState([]);
  const moveItem = () => {};

  console.log(collected);

  const moveStack = (item: any) => {};
  return (
    <div className="max-w-full m-8 max-h-screen">
      <div className="flex">
        <ul ref={remove}>
          <Item index={0} text="Stack 1" />
          <Item index={1} text="Stack 2" />
          <Item index={2} text="Stack 3" />
          <Item index={3} text="Stack 4" />
          <Item index={4} text="Stack 5" />
          <Item index={5} text="Stack 6" />
          <Item index={6} text="Stack 7" />
        </ul>
      </div>
      <StackContainer id={0} />
      <StackContainer id={1} />
    </div>
  );
};

export default RunningOrderTab;
