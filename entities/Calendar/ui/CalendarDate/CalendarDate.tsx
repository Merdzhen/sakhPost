import cls from './CalendarDate.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

const WeekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

interface CalendarDateProps {
  date: number;
  weekDay: number;
  selected: boolean;
  gray: boolean;
  handleClick: (dateLocalString: string) => void;
  dateLocaleString: string;
}

const CalendarDate = (props: CalendarDateProps) => {
  const { date, weekDay, selected, gray, handleClick, dateLocaleString } = props;
  const dateMods: Mods = {
    [cls.selected]: selected,
    [cls.gray]: gray,
  };

  const weekDayMods: Mods = {
    [cls.weekend]: weekDay === 0 || weekDay === 6,
    [cls.gray]: gray,
  };

  return (
    <div className={cls.CalendarDate} onClick={() => handleClick(dateLocaleString)}>
      <div className={classNames(cls.date, dateMods)}>{date}</div>
      <div className={classNames(cls.weekDay, weekDayMods)}>{WeekDays[weekDay]}</div>
    </div>
  );
};

export default CalendarDate;
