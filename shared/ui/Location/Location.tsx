import Image from "next/image";
import cls from './Location.module.scss';

interface LocationProps {
  text: string;
}
const Location = (props: LocationProps) => {
  const {text } = props;

  return (
    <div className={cls.location}>
      <Image src="/icons/location.svg" alt="" width={12} height={12}/>
      <div>{text}</div>
    </div>
  );
};

export default Location;
