import "./Now.scss";

function getDate() {
  const today = new Date();
  return today.getMinutes() <= 9
    ? `Today, ${today.getHours()}:0${today.getMinutes()}`
    : `Today, ${today.getHours()}:${today.getMinutes()}`;
}

const round = (temp) => {
  return Math.round(temp);
};

function Now(props) {
  return (
    <div className="now">
      <div className="now__main">{props.main}</div>
      <div className="now__temp">
        <div className="now__number">{round(props.temp)}</div>
        <sup className="now__degree">°C</sup>
      </div>
      <div className="now__city">{props.name}</div>
      <div className="now__date">{getDate()}</div>
    </div>
  );
}

export default Now;
