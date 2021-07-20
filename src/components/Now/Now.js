import "./Now.scss";

function getDate() {
  const today = new Date();
  return today.getMinutes() <= 9
    ? `Today, ${today.getHours()}:0${today.getMinutes()}`
    : `Today, ${today.getHours()}:${today.getMinutes()}`;
}

const round = (temp) => {
  return Math.round(temp - 273.15);
};

function Now(props) {
  return (
    <div className="now">
      <div className="now__main">{props.main}</div>
      <div className="now__temp">{round(props.temp)}</div>
      <div className="now__city">{props.name}</div>
      <div className="now__date">{getDate()}</div>
    </div>
  );
}

export default Now;
