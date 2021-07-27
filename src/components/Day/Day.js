import "./Day.scss";

const round = (temp) => {
  return Math.round(temp - 273.15);
};

function Day(props) {
  return (
    <div className="now">
      <img
        alt="symbol"
        // src={`http://openweathermap.org/img/wn/${props.list.weather.icon}@2x.png`}
      />
      <div className="now__main">{props.main}</div>
      {/* <div className="now__temp--max">{round(props.list.main.temp_max)}</div> */}
      {/* <div className="now__temp--min">{round(props.list.main.temp_min)}</div> */}
      {/* <div className="now__date">{props.list.dt}</div> */}
    </div>
  );
}

export default Day;

//{date.toLocaleDateString()} - {date.toLocaleTimeString()}
