import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_CURRENT_EVENT } from "../../../graphql/cache";
import Loading from "../../Loading";
// import RunningOrderEditor from "../../RunningOrder";
import { SecondaryButton } from "../../Styled/Buttons";
import EventInfo from "../EventInfo";

const GeneralTab: FC = () => {
  const { data, loading } = useQuery(GET_CURRENT_EVENT);
  console.log(data);
  const handleClick = () => {};
  if (loading) return <Loading />;
  if (data) {
    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-col text-center">
          <div className="flex justify-center space-x-10">
            <SecondaryButton text="Print Scores" onClick={handleClick} />
            <SecondaryButton text="Scorekeeper Link" onClick={handleClick} />
            <SecondaryButton text="Delete Event" onClick={handleClick} />
          </div>
          <div className="flex justify-center space-x-20 items-center mt-10">
            <div role="group">
              <p>Public Event</p>
              <span>True</span>
              <input
                checked={data.currentEvent.visible === true ? true : false}
                onClick={() =>
                  alert("This is a publicly listed event. Anyone can register.")
                }
                type="radio"
                name="public"
                value="false"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer"
              />
              <span>Fasle</span>
              <input
                checked={data.currentEvent.visible === false ? true : false}
                onClick={() =>
                  alert(
                    "This is a private event, you must share the invite link with all participants."
                  )
                }
                type="radio"
                name="public"
                value="true"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer"
              />
            </div>
            <p>
              Registered Athletes:{" "}
              {data.currentEvent.athletes
                ? data.currentEvent.athletes.length
                : 0}
            </p>
          </div>
        </div>
        <div className="max-w-full m-8">
          <EventInfo />
        </div>
      </div>
    );
  }
  return <div>Error: Refresh the page.</div>;
};

export default GeneralTab;
