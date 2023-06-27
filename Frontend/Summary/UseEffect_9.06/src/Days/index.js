import "./Days.css";
import { Day } from "./Day";

export const Days = ({ onDaySelected }) => {
  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  return (
    <div className="Days">
      {days.map((day) => {
        return (
          <Day key={day} 
          onClick={() => onDaySelected(day)}>
            {day}
          </Day>
        );
      })}
    </div>
  );
};
