import { FC } from "react";
import { SecondaryButton } from "../../Styled/Buttons";
import EventInfo from "../EventInfo";

const GeneralTab: FC = () => {
  const handleClick = () => {};
  return (
    <div className="flex flex-col w-full">
      <div className="max-w-full m-8">
        <EventInfo />
      </div>
      <div className="flex flex-col text-center">
        <div className="flex justify-center space-x-10">
          <SecondaryButton text="Print Scores" onClick={handleClick} />
          <SecondaryButton text="Edit Stacks" onClick={handleClick} />

          <SecondaryButton text="Scorekeeper Link" onClick={handleClick} />

          <SecondaryButton text="Delete Event" onClick={handleClick} />
        </div>
        <div role="group">
          <p>Public Event</p>
          <span>True</span>
          <input
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
        <div role="group">
          <p>Score Keepers</p>
          <span>True</span>
          <input
            onClick={() =>
              alert("Confirm: You will have scorekeepers for every boulder.")
            }
            type="radio"
            name="scorekeepers"
            value="true"
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer"
          />
          <span>False</span>
          <input
            onClick={() =>
              alert(
                "With this set to fasle you will have to score the entire event in the scoring dashboard. Multiple individulals are able to score through the scoring window. If you are hosting an event where you have scorekeeprs for every boulder set this to true and share the scorekeeper link with your scorekeeprs so they can register for the event."
              )
            }
            type="radio"
            name="scorekeepers"
            value="false"
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer"
          />
        </div>
        <p>Registered Athletes: 10</p>
      </div>
    </div>
  );
};

export default GeneralTab;
