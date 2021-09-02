import { FC, useState } from "react";
import { format, addMonths, subMonths, addDays, startOfMonth } from "date-fns";
import { endOfMonth, endOfWeek, startOfWeek, parse } from "date-fns/esm";

interface Props {}

const Monthly: FC<Props> = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  function renderHeader() {
    const dateFormat = "MM yyyy";
    return (
      <div className="flex justify-center flex-col">
        <div className="flex justify-between p-2">
          <button onClick={() => prevMonth()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div>
            <span>{format(currentMonth, dateFormat)}</span>
          </div>
          <div>
            <button onClick={() => nextMonth()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  function renderDays() {
    const dateFormat = "dd";
    const days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(<div key={i}>{format(addDays(startDate, i), dateFormat)}</div>);
    }
    return <div className="flex flex-col">{days}</div>;
  }

  function renderCells() {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            key={i}
            className="flex border w-full"
            onClick={() => onDateClick()}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex w-full justify-between" key={day.getDay()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="flex flex-col w-full justify-between">{rows}</div>;
  }

  const onDateClick = () => {};
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  return (
    <div className="flex flex-col border h-full">
      {renderHeader()}
      {/* {renderDays()} */}
      {renderCells()}
    </div>
  );
};

export default Monthly;
