import React from 'react';
import Location from "shared/ui/Location/Location";
import Image from "next/image";
import cls from './Header.module.scss'

const Header = () => {
  return (
    <div className={`${cls.header} wrapper`}>
      <div className={cls.line}>
        <Location text="Южно-Сахалинск" />
      </div>
      <div className={cls.line}>
        <Image src="/images/logo-sakhpost.png" alt="SakhPost logo" width={172} height={40} className={cls.img}/>
      </div>
    </div>
  );
};

export default Header;
