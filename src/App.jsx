import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, title: "리엑트공부하기", content: "기본적인 리스트 생성" },
    { id: 2, title: "자바스크립트공부하기", content: "기본기 다지기" },
  ];
  const [lists, setLists] = useState(initialState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // 각 title과 content에 들어갈 문자열을 배치할수 있도록 변수선언
  const addList = (event) => {
    event.preventDefault(); //preventDefault - 어떤 이벤트를 명시적으로 처리하지 않은 경우 기본동작을 실행하지 않도록 하는것
    if (!title || !content) {
      alert("할일과 계획을 써주세요!");
      return;
    }
    // title칸과 content 둘 중 하나라도 없으면 return시킴
    setLists([...lists, { id: Date.now(), title: title, content: content }]);
    setTitle("");
    setContent("");
  };
  const removeList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <>
      <h1>TodoList</h1>
      <div className="bottom-line"></div>
      <div className="add-list">
        <form onSubmit={addList}>
          <input
            type="text"
            placeholder="Todo list"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="contents"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <button type="submit">Todolist 추가하기</button>
        </form>
      </div>
      <div className="horizontalLine"></div>
      <h2>계획한 일</h2>
      <ul>
        {lists.map((list) => (
          <li
            key={list.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>
              TO-DO: {list.title}, 내용: {list.content}{" "}
            </span>
            <button onClick={() => removeList(list.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div className="horizontalLine"></div>
      <h2>끝낸 목록</h2>
    </>
  );
}

//현재 생성/삭제 기능까지밖에 구현 못함

export default App;
