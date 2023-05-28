import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MakeThread = () => {
  const navigate = useNavigate();
  const root = "/thread";
  const [ti, setTi] = React.useState("");

  const makeTh = (event) => {
    event.preventDefault();
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: ti }),
      }
    )
      .then(() => setTi(""))
      .then(window.alert("新規スレッドの作成に成功しました"));
    navigate(`${root}`);
  };

  return (
    <div>
      <h1>スレッド新規作成</h1>
      <form id="thTitle">
        <input
          type="text"
          name="Create"
          placeholder="スレッドタイトル"
          value={ti}
          onChange={(event) => {
            setTi(event.target.value);
          }}
          className="t1"
        />
        <button onClick={makeTh} className="Button">
          作成
        </button>
      </form>
      <Link to={`${root}`} id="rtTop">
        <h2>Topに戻る</h2>
      </Link>
    </div>
  );
};
