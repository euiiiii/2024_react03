import { Link } from "react-router-dom";
import dummy from "../db/data.json"

function DayList(props) {
    // console.log(dummy)
    return (
        <div>
            <ul className="list_day">
                {dummy.days.map(k=>{
                    return <li key={k.id}>
                        {/* Link가 a link와 같음 */}
                        {/* 각자 컴포넌트에서 Day 관련해서 누름
                        Link에 대한 내용은 App.js에서 보여줌 
                        주소에 따라 컴포넌트가 바뀜*/}
                        <Link to={`/day/${k.day}`}> Day {k.day}</Link>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default DayList;