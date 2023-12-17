import { CustomDate } from "../types/calendar";

export const get25days = (): CustomDate[] => {
  let dates: CustomDate[] = [];
  for (let i = 0; i < 25; i+= 1) {
    let myDate = new Date(); // today
    myDate.setDate(myDate.getDate() + i); // today + i

    let date = myDate.getDate();
    let month = myDate.getMonth();
    let year = myDate.getFullYear();

    dates.push({
      date,
      month,
      year,
      weekDay: myDate.getDay(),
      dateLocaleString: `${date}.${month + 1}.${year}`,
    })
  }
  return dates;
}

export const getLocalStringFromDate = (myDate: Date): string => {
  const date = myDate.getDate();
  const month = myDate.getMonth();
  const year = myDate.getFullYear();
  const dateLocaleString = `${date}.${month + 1}.${year}`;
  return dateLocaleString;
}

export const getDatesDiff = (dateFirst: string, dateSecond: string): number => {
  const date1 = Number(dateFirst.slice(0, 2));
  const month1 = Number(dateFirst.slice(3, 5)) - 1;
  const year1 = Number(dateFirst.slice(-4));
  const date2 = Number(dateSecond.slice(0, 2));
  const month2 = Number(dateSecond.slice(3, 5)) - 1;
  const year2 = Number(dateSecond.slice(-4));
  // @ts-ignore
  const diffTime = Math.abs(new Date(year1, month1, date1) - new Date(year2, month2, date2) );
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
