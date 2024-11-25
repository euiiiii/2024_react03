import React, { useState } from 'react';

// 실제 DB를 수정하자
// Create: POST => Insert도 포함(만들어지는 거니까)
// Read:   GET
// Update: PUT
// Delete: DELETE
function Word({word}) {
    const [wo, setWo] = useState(word);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(params) {
        setIsShow(!isShow);
    }

    // JSON.stringify: 객체를 json으로 변경(보낼 때)
    // response.json() 메서드를 호출하면 JSON 데이터를 javascript 객체로 변환한다.(받을 때)
    function toggleDone(params) {
        // setIsDone(!isDone);
        // 실제 DB 수정하기
        fetch(`http://localhost:3010/words/${word.id}`, {
            // mybatis처럼 쿼리가 있는 게 아니라 위에 3~7 번째 줄 주석처럼 명령어로 다 해결됨
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                ...word, 
                isDone : !isDone,
                
            })
        })
        .then(res=>{
            if (res.ok) {
                setIsDone(!isDone);
            }
        })
        .catch((error) => {console.error("Error: ", error)});
    }
    
    function del(params) {
        if (window.confirm('정말 삭제할까요?')) {
            fetch(`http://localhost:3010/words/${word.id}`, {
                // mybatis처럼 쿼리가 있는 게 아니라 위에 3~7 번째 줄 주석처럼 명령어로 다 해결됨
                method : 'DELETE',
            }).then(res=>{
                if (res.ok) {
                    // 상태를 초기화 및 렌더링을 하고 id를 0을 줬다고?!
                    // 여기서 이미 0으로 렌더링이 됐기 때문에 아래에서 따로 렌더링을 할 필요가 없다.
                    setWo({id:0})
                }
            })
            .catch((error) => {console.error("Error: ", error)});
        }
    }

    // id가 0이면 아무런 렌더링하지 않는다,
    // 컴포넌트가 null 리턴하면 렌더링을 하지 않는다. => null을 쓰면 감추는 역할!!
    // 삭제 후 ui에서 내용을 감추는 역할을 한다.
    if (wo.id===0) {
        return null;
    }
    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type='checkbox' checked={isDone} onChange={toggleDone} /></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button class='btn_del' onClick={del}>삭제</button>
            </td>
        </tr>
    );
}

export default Word;