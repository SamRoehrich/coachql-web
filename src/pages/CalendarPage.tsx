import { gql, useApolloClient } from "@apollo/client";
import { useState } from "react";
import { FC } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const abrMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getWeekRange = (date: Date): string[] => {
  const dayNumber = date.getDate();
  const dayIdx = date.getDay();
  const range = dayNumber - dayIdx;
  const limit = dayNumber + (6 - dayIdx);
  const res = [range.toString(), limit.toString()];
  return res;
};

const CalendarPage: FC = () => {
  const date = new Date();
  const [isWeekly, setIsWeekly] = useState(false);
  const client = useApolloClient();
  const workouts = client.readFragment({
    id: "Team:1",
    fragment: gql`
      fragment Workouts on Team {
        workouts {
          name
          description
          id
          workoutType
        }
      }
    `,
  });
  return (
    <div className="bg-gray-300 w-full">
      <DndProvider backend={HTML5Backend}>
        <div className="h-full">
          <div className="space-x-4 p-2">
            <button>Comp</button>
            <button>Travel</button>
            <button>Training</button>
            <button>Rec</button>
            <button>Junior</button>
          </div>
          <div className="flex justify-between p-2">
            <div>
              {isWeekly ? (
                <div className="flex space-x-2">
                  <p>
                    {MONTH[date.getMonth()]}
                    {getWeekRange(date)[0]}
                  </p>
                  <p>-</p>
                  <p>
                    {MONTH[date.getMonth()]}
                    {getWeekRange(date)[1]}
                  </p>
                </div>
              ) : (
                <p>
                  {MONTH[date.getMonth()]} {date.getFullYear()}
                </p>
              )}
            </div>
            <div className="flex space-x-6">
              <button onClick={() => setIsWeekly(true)}>Weekly</button>
              <button onClick={() => setIsWeekly(false)}>Monthly</button>
            </div>
          </div>
          <div className="h-3/5">{isWeekly ? <Weekly /> : <Monthly />}</div>
          <div>
            {workouts ? (
              <WorkoutSelector workouts={workouts.workouts} />
            ) : (
              <WorkoutSelector workouts={[]} />
            )}
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

const Weekly: FC = () => {
  return (
    <div className="bg-gray-100 flex justify-between h-full p-2">
      {dayNames.map((day, idx) => (
        <WeekDayCard day={day} idx={idx} />
      ))}
    </div>
  );
};

const Monthly: FC = () => {
  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="h-1/5 flex justify-between p-2 w-full">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div className="h-1/5 flex justify-between p-2 w-full">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>{" "}
        <div className="h-1/5 flex justify-between p-2 w-full">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>{" "}
        <div className="h-1/5 flex justify-between p-2 w-full">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>{" "}
        <div className="h-1/5 flex justify-between p-2 w-full">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  workouts: Workout[] | [];
}

interface Workout {
  name: string;
  workoutType: string;
  workouts: [];
}

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutSelector: FC<Props> = ({ workouts }) => {
  if (workouts.length > 0) {
    console.log(workouts);
    return (
      <div>
        {workouts.map((workout: Workout) => (
          <WorkoutCard workout={workout} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <p>No workouts to assign.</p>
    </div>
  );
};

const WorkoutCard: FC<WorkoutCardProps> = ({ workout }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "workout",
    item: { name: workout.name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className="w-1/12 border border-gray-600"
      ref={dragRef}
      key={workout.name}
    >
      <p>{workout.workoutType}</p>
      <p> {workout.name} </p>
    </div>
  );
};

interface WeekDayCardProps {
  day: string;
  idx: number;
}

const WeekDayCard: FC<WeekDayCardProps> = ({ day, idx }) => {
  const date = new Date();

  const [items, setItems] = useState<Workout[]>([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "workout",
    drop: (workout: Workout) =>
      setItems((items) =>
        !items.includes(workout) ? [...items, workout] : items
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      key={idx}
      className={`${
        idx === date.getDay()
          ? "border w-full text-center"
          : "w-full text-center"
      }`}
      ref={dropRef}
    >
      <p>{day}</p>
      {items.map((item, idx) => (
        <div key={idx}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CalendarPage;
