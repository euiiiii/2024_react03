import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json"

function DayList(props) {
  // console.log(dummy);

  // const [days, setDays] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3010/days')
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       console.log(data);
  //       setDays(data);
  //     })
  //     .catch((error) => console.error("Error : ", error));
  // }, []);

  const days = useFetch('http://localhost:3010/days')

  return (
    <ul className="list_day">
      {days.map(k => {
        return <li key={k.id}>
            {/* Link가 a link와 같음 */}
            {/* 각자 컴포넌트에서 Day 관련해서 누름
            Link에 대한 내용은 App.js에서 보여줌 
            주소에 따라 컴포넌트가 바뀜 */}
          <Link to={`/day/${k.day}`}> Day {k.day}</Link>
        </li>
      })}
    </ul>
  );
}

export default DayList;