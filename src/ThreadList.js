import * as React from "react";
import { Link } from "react-router-dom";

export const ThreadList = () => {
  const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const offSet = 0;

  const [threadList, setThreadList] = React.useState([]);

  const getList = () => {
    fetch(`${url}/threads?offset=${offSet}`)
      .then((responce) => responce.json())
      .then((data) => {
        setThreadList(data);
        console.log(data);
      });
  };

  React.useEffect(() => {
    getList();
  }, []);

  const list = threadList.map((thread, index) => (
    <div className="container" key={index}>
      <div className="title">
        <Link to={"/thread/" + thread.id}>{thread.title}</Link>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>新着スレッド</h1>
      {list}
    </div>
  );
};
