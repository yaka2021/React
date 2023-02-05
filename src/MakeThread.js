import * as React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export const MakeThread = () => {
  const makeTh = (event) => {
    event.preventDefault();
    const Ti = document.getElementById("thTitle").Create.value;
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: Ti }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>スレッド新規作成</h1>
      <form id="thTitle" onSubmit={makeTh}>
        <input
          type="text"
          name="Create"
          placeholder="スレッドタイトル"
          className="t1"
        />
        <input type="submit" value="投稿" className="Button" />
      </form>
      <Link to="/thread" id="rtTop">
        <h2>Topに戻る</h2>
      </Link>
    </div>
  );
};
