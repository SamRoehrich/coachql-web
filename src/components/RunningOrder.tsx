import { FC, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  RunningOrderContext,
  RunningOrderState,
  initialState,
} from "./RunningOrderContext";
import { useRunningOrderState } from "./RunningOrderContext";
import { InitialStateType } from "../types/RunningOrder";

interface StackContainerProps {
  id: number;
}

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

const StackContainer: FC<StackContainerProps> = ({ id }) => {
  return (
    <div className="w-1/5 h-32 border">
      <ul></ul>
    </div>
  );
};

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

const RunningOrderTab: FC = () => {
  const { state, dispatch } = useRunningOrderState();
  const [dragging, setDragging] = useState(false);
  const [runningOrder, setRunningOrder] = useState(initialState);
  const dragNode = useRef<EventTarget>();
  const dragItem = useRef<DragStart>();

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    { stackNumber, groupNumber }: DragStart
  ) => {
    setDragging(true);
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = {
      stackNumber,
      groupNumber,
    };
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    { stackNumber, groupNumber }: DragStart
  ) => {
    if (dragNode.current !== e.target && dragItem && dragItem.current) {
      console.log("Target is NOT the same as dragged item");
      setRunningOrder((oldList) => {
        let newList: InitialStateType = JSON.parse(JSON.stringify(oldList));
        newList.orderedStacks[groupNumber].stacks.splice(
          stackNumber,
          0,
          newList.orderedStacks[groupNumber].stacks.splice(
            dragItem.current!.stackNumber,
            1
          )[0]
        );
        dragItem.current = { stackNumber, groupNumber };
        localStorage.setItem("List", JSON.stringify(newList));
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    console.log("drag ended");
    setDragging(false);
    dragNode.current?.removeEventListener("dragend", handleDragEnd);
    dragNode.current = undefined;
  };
  return (
    <RunningOrderState>
      <div className="max-w-full m-8 max-h-screen flex">
        <div className="flex">
          <ul>
            {runningOrder.unorderedStacks.map((stack) => (
              <div
                className="m-8"
                draggable={true}
                onDragStart={(e) =>
                  handleDragStart(e, { stackNumber: stack.id, groupNumber: 0 })
                }
                onDragEnter={
                  dragging
                    ? (e) =>
                        handleDragEnter(e, {
                          stackNumber: stack.id,
                          groupNumber: 0,
                        })
                    : () => {}
                }
              >
                <li key={"stack" + stack.gender + stack.id}>
                  <Item
                    index={stack.id}
                    gender={stack.gender}
                    catagory={stack.catagory}
                    group={0}
                  />
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-full">
          {runningOrder.orderedStacks.map((group, idx) => (
            <StackContainer id={idx}>
              <div>
                <p>{group.title}</p>
                {group.stacks.length > 0 ? (
                  <ul>
                    {group.stacks.map((stack) => (
                      <li key={group.title + "group"} draggable>
                        <div></div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <p>Drag a stack to get started</p>
                  </div>
                )}
              </div>
            </StackContainer>
          ))}
        </div>
      </div>
    </RunningOrderState>
  );
};

export default RunningOrderTab;
