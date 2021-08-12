import { gql, useApolloClient } from "@apollo/client";
import { useState } from "react";
import { FC } from "react";

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
    </div>
  );
};

const Weekly: FC = () => {
  return (
    <div className="bg-gray-100 flex justify-between h-full p-2">
      <div className="">
        <p>Sunday</p>
      </div>
      <div className="">
        <p>Monday</p>
      </div>
      <div className="">
        <p>Tuesday</p>
      </div>
      <div className="">
        <p>Wednesday</p>
      </div>
      <div className="">
        <p>Thursday</p>
      </div>
      <div className="">
        <p>Friday</p>
      </div>
      <div className="">
        <p>Saturday</p>
      </div>
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

const WorkoutSelector: FC<Props> = ({ workouts }) => {
  if (workouts.length > 0) {
    return (
      <div>
        {workouts.map((workout: Workout) => (
          <div draggable>
            <p> {workout.name} </p>
          </div>
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

export default CalendarPage;
