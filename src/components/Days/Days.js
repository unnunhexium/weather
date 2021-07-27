import Day from "../Day/Day";
import "./Days.scss";

const sliceArray = (arr) => {
  const newArr = [];
  for (let i = 0; i < 5; i++) {
    newArr.push(arr.slice(i * 8, (i + 1) * 8));
  }
  return newArr;
};

function Days(props) {
  return (
    <div className="days">
      {/* {props.forecast.list.map((weather) => (
        <Day />
      ))} */}
    </div>
  );
}

export default Days;
