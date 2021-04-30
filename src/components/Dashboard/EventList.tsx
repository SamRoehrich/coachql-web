import { FC } from "react";
import { useEventsQuery } from "../../generated/graphql";
import { currentEventIdVar, currentEventVar } from "../../graphql/cache";
import Loading from "./../Loading";
import { data } from "../../db";

interface Props {}

// const EventList: FC<Props> = () => {
//   const { data, loading } = useEventsQuery();

//   if (loading) return <Loading />;
//   if (data && data.events && data.events.length > 0) {
//     currentEventIdVar(data.events[0].id);
//     currentEventVar(data.events[0]);
//     return (
//       <div className="">
//         <ul>
//           {data.events.map((x) => {
//             return (
//               <li
//                 key={x.id}
//                 onClick={() => {
//                   currentEventIdVar(x.id);
//                   currentEventVar(x);
//                 }}
//               >
//                 <p>{x.name}</p>
//                 <p>{x.location}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <p>No Events</p>
//     </div>
//   );
// };

const EventList: FC<Props> = () => (
  <div className="w-1/2 mt-5">
    <ul>
      {data.map((e) => (
        <li
          className="h-20 flex items-center hover:bg-gray-300 justify-between cursor-pointer"
          onClick={() => {
            currentEventIdVar(e.id);
            currentEventVar(e);
          }}
        >
          <p>{e.name}</p>
          <p>{e.date}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default EventList;
