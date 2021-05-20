import { gql, useApolloClient } from "@apollo/client";
import { FC, useEffect, useRef, useState } from "react";
import {
  RunningOrder,
  useEditRunningOrderMutation,
} from "../generated/graphql";
import Loading from "./Loading";

interface Stack {
  id: number;
  gender: string;
  catagory: string;
}

interface Params {
  group: string;
  stackIndex: number;
}

interface DBStack {
  id: string;
}

const RunningOrderTab: FC = () => {
  const client = useApolloClient();
  const ro = client.readFragment({
    id: "Event:1",
    fragment: gql`
      fragment runningOrder on Event {
        runningOrder {
          id
          unordered {
            id
            gender
            catagory
          }
          first {
            id
            gender
            catagory
          }
          second {
            id
            gender
            catagory
          }
          third {
            id
            gender
            catagory
          }
        }
      }
    `,
  });
  const [dragging, setDragging] = useState(false);
  const [runningOrder, setRunningOrder] = useState<RunningOrder>(
    ro.runningOrder
  );
  const dragNode = useRef<EventTarget>();
  const dragItem = useRef<Params>();

  const [editRunningOrder] = useEditRunningOrderMutation();
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    params: Params
  ) => {
    setDragging(true);
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", () => handleDragEnd(e));
    dragNode.current.addEventListener("dragover", (e) => e.preventDefault());
    dragItem.current = params;
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(false);
    e.preventDefault();
    dragItem.current = undefined;
    dragNode.current?.removeEventListener("dragend", () => handleDragEnd(e));
    dragNode.current?.removeEventListener("dragover", (e) =>
      e.preventDefault()
    );
    dragNode.current = undefined;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    params: Params
  ) => {
    if (dragNode.current !== e.target) {
      setRunningOrder((oldRO) => {
        let newRO = JSON.parse(JSON.stringify(oldRO));
        console.log(dragItem.current);
        newRO[params.group].splice(
          params.stackIndex,
          0,
          newRO[dragItem.current!.group].splice(
            dragItem.current!.stackIndex,
            1
          )[0]
        );
        dragItem.current = params;
        return newRO;
      });
    }
  };

  // const handleSaveClick = () => {
  //   const first = runningOrder.first.map((item) => ({ id: item.id }));
  //   const unordered = runningOrder.unordered.map(item => ({ id: item.id }))
  //   const second = runningOrder.second.map(item => ({ id: item.id }))
  //   const third = runningOrder.third.map(item => ({ id: item.id }))

  //   editRunningOrder({
  //     variables: { first, second, third, unordered}
  //   })
  // };

  if (runningOrder) {
    return (
      <div className="max-w-full m-8">
        <div className="dran-n-drop flex text-center">
          <div
            id="container"
            onDragEnter={
              dragging && !runningOrder.unordered.length
                ? (e) =>
                    handleDragEnter(e, { group: "unordered", stackIndex: 0 })
                : undefined
            }
          >
            <p>Unordered</p>
            {runningOrder.unordered &&
              runningOrder.unordered.map((stack, idx) => (
                <div
                  key={stack.id}
                  draggable="true"
                  onDragStart={(e) =>
                    handleDragStart(e, { group: "unordered", stackIndex: idx })
                  }
                  onDragEnter={
                    dragging
                      ? (e) =>
                          handleDragEnter(e, {
                            group: "unordered",
                            stackIndex: idx,
                          })
                      : undefined
                  }
                >
                  <p>
                    {stack.catagory} {stack.gender}
                  </p>
                </div>
              ))}
          </div>
          <div
            id="container"
            onDragEnter={
              dragging && !runningOrder.first.length
                ? (e) => handleDragEnter(e, { group: "first", stackIndex: 0 })
                : undefined
            }
          >
            <p>Group 1</p>
            {runningOrder.first &&
              runningOrder.first.map((stack: Stack, idx) => (
                <div
                  draggable
                  onDragStart={(e) =>
                    handleDragStart(e, { group: "first", stackIndex: idx })
                  }
                  onDragEnter={
                    dragging
                      ? (e) =>
                          handleDragEnter(e, {
                            group: "first",
                            stackIndex: idx,
                          })
                      : undefined
                  }
                  key={stack.id}
                >
                  <p>
                    {stack.gender} {stack.catagory}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* <button onClick={handleSaveClick}>Save Changes</button> */}
      </div>
    );
  }
  return <div>Running Order</div>;
};

export default RunningOrderTab;
