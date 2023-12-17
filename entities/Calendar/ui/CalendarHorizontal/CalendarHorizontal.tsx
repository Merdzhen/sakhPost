import CalendarDate from "../CalendarDate/CalendarDate";
import cls from './CalendarHorizontal.module.scss'
import React, {Fragment} from "react";
import {CustomDate} from "../../types/calendar";
import {get25days, getDatesDiff, getLocalStringFromDate} from "../../lib/calendarFuncs";

const dates: CustomDate[] = get25days();

export const CalendarHorizontal = () => {
  const [activeDate, setActiveDate] = React.useState(getLocalStringFromDate(new Date()));
  const handleClick = (dateLocalString: string): void => {
    setActiveDate(dateLocalString);
  };

  return (
     <div className={cls.CalendarHorizontal}>
       <div className={cls.month}>Декабрь</div>
       <div className={cls.dates}>
         {dates.map((el, index) =>
            <Fragment key={index}>
              <CalendarDate date={el.date} weekDay={el.weekDay} selected={el.dateLocaleString === activeDate} gray={getDatesDiff(el.dateLocaleString, activeDate) > 6} handleClick={handleClick} dateLocaleString={el.dateLocaleString}/>
            </Fragment>
         )}
       </div>
     </div>
  );
};

