import * as React from "react";
import "./App.css";

export const ThreadList = () => {
  const [threadList, setThreadList] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
    )
      .then((responce) => responce.json())
      .then((data) => {
        setThreadList(data);
        console.log(data);
      });
  }, []);

  const list = threadList.map((threadsList, index) => (
    <div className="container" key={index}>
      <div className="title">{threadsList.title}</div>
    </div>
  ));

  return (
    <div>
      <h1>新着スレッド</h1>
      {list}
    </div>
  );
};
