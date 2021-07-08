import Day from "../Day/Day";
import "./Days.scss";

function Days() {
  return (
    <div className="days">
      <Day
        dt={1602104400 * 1000}
        temp_min="22"
        temp_max="24"
        main="Clear"
        icon="01d"
      />
      <Day />
      <Day />
      <Day
        dt={1602104400 * 1000}
        temp_min="22"
        temp_max="24"
        main="Clear"
        icon="01d"
      />
      <Day />
      <Day />
      <Day />
    </div>
  );
}

export default Days;
