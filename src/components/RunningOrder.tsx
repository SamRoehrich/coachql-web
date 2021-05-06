import { FC, useRef, useState } from "react";

interface Stack {
  id: number;
  gender: string;
  catagory: string;
}

interface Group {
  id: number;
  title: string;
  items: Stack[];
}

const initialState: Group[] = [
  {
    id: 0,
    title: "Unordered",
    items: [
      {
        id: 0,
        gender: "Male",
        catagory: "JR",
      },
      {
        id: 1,
        gender: "Female",
        catagory: "JR",
      },
    ],
  },
  {
    id: 1,
    title: "Group One",
    items: [
      {
        id: 2,
        gender: "Male",
        catagory: "A",
      },
      {
        id: 2,
        gender: "Female",
        catagory: "A",
      },
    ],
  },
];

interface Params {
  groupIndex: number;
  stackIndex: number;
}

const RunningOrderTab: FC = () => {
  const [dragging, setDragging] = useState(false);
  const [runningOrder, setRunningOrder] = useState(initialState);
  const dragNode = useRef<EventTarget>();
  const dragItem = useRef<Params>();

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    params: Params
  ) => {
    console.log("Drag Started");
    setDragging(true);
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = params;
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragItem.current = undefined;
    dragNode.current?.removeEventListener("dragend", handleDragEnd);
    dragNode.current = undefined;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    params: Params
  ) => {
    console.log("Entering a drag target");
    if (dragNode.current !== e.target) {
      console.log("Target is different from original");
      setRunningOrder((oldRO) => {
        let newRO: Group[] = JSON.parse(JSON.stringify(oldRO));
        newRO[params.groupIndex].items.splice(
          params.stackIndex,
          0,
          newRO[dragItem.current!.groupIndex].items.splice(
            dragItem.current!.stackIndex,
            1
          )[0]
        );
        dragItem.current = params;
        return newRO;
      });
    }
  };

  return (
    <div className="max-w-full m-8">
      <div className="dran-n-drop flex text-center">
        {runningOrder.map((group, gIdx) => (
          <div key={group.title} className="m-8 border" onDragEnter={dragging && !group.items.length ? (e) => handleDragEnter(e, { groupIndex: gIdx, stackIndex: 0}) : () => {}}>
            <p>{group.title}</p>
            {group.items.map((stack, sIdx) => (
              <div
                draggable
                key={stack.gender + stack.catagory}
                className="m-8 flex flex-col text-center border"
                onDragStart={(e) =>
                  handleDragStart(e, { groupIndex: gIdx, stackIndex: sIdx })
                }
                onDragEnter={
                  dragging
                    ? (e) =>
                        handleDragEnter(e, {
                          groupIndex: gIdx,
                          stackIndex: sIdx,
                        })
                    : () => {}
                }
              >
                <p>{stack.gender}</p>
                <p>{stack.catagory}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningOrderTab;
