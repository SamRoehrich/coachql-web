import { FC } from "react";
import { useDrag } from "react-dnd";

interface ItemProps {
  onDropItem?: (item: string) => {};
  gender: string;
  index: number;
  catagory: string;
  group: number;
}

interface DragStart {
  stackNumber: number;
  groupNumber: number;
}

const Item: FC<ItemProps> = ({ gender, catagory, index, group }) => {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    { stackNumber, groupNumber }: DragStart
  ) => {
    console.log("drag started");
    console.log(stackNumber, groupNumber);
  };
  return (
    <div
      draggable
      onDragStart={(e) =>
        handleDragStart(e, { stackNumber: index, groupNumber: group })
      }
      key={gender + catagory + index}
    >
      <li>
        <div className="flex">
          <p>{gender}</p>
          <p>{catagory}</p>
        </div>
      </li>
    </div>
  );
};

export default Item;
