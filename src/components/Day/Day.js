import "./Day.scss";

function Day({ dt, temp_min, temp_max, main, icon }) {
  const date = new Date(dt);
  return (
    <div>
      <img
        alt="symbol"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <div>{main}</div>
      <p>
        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </p>
      <p>{temp_min}</p>
      <p>{temp_max}</p>
    </div>
  );
}

export default Day;
