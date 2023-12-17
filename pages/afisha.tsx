import React from 'react';
import { CalendarHorizontal } from "entities/Calendar";
import cls from 'app/styles/pages/Afisha.module.scss';

const Afisha = () => {
  return (
    <div className={`wrapper`}>
      <div className={cls.main}>
        <div className={cls.left}>
          <div className={cls.title}>Расписание</div>
          <CalendarHorizontal />
        </div>
        <div className={cls.right}>
          <div className={cls.tinkoff}></div>
        </div>
      </div>
    </div>
  );
};

export default Afisha;
