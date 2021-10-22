import { useEffect } from "react";
import { useGetAthletesInOrgQuery } from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";
import { classNames } from "../../utils/classNames";

const AthleteList = () => {
  const { data: athletes } = useGetAthletesInOrgQuery({
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    currentAthleteId(athletes?.getAthletesInOrg[0].id);
  }, [athletes]);
  const handleListItemClick = (athleteId: number) => {
    console.log("clicked" + athleteId);
    currentAthleteId(athleteId);
  };

  if (athletes?.getAthletesInOrg) {
    const sorted = [...athletes.getAthletesInOrg];
    sorted.sort((a, b) => a.user.lastName.localeCompare(b.user.lastName));
    return (
      <div>
        <div className="flex flex-col col-span-1 w-full row-span-full">
          {sorted.map((athlete, idx) => (
            <>
              <div
                key={athlete.id + "" + idx}
                className={classNames(
                  idx % 2 === 0 ? "bg-gray-100" : "",
                  "text-sm h-10 w-full flex space-x-1 flex-none items-center"
                )}
                onClick={() => handleListItemClick(athlete.id)}
              >
                <p className="text-sm">{athlete.user.firstName}</p>
                <p>{athlete.user.lastName}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default AthleteList;
