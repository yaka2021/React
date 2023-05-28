import * as React from "react";
import { useParams } from "react-router-dom";

export const Thread = () => {
  const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const params = useParams();
  const offSet = 0;

  const [replies, setReplies] = React.useState([]);
  const [replyContent, setReplyContent] = React.useState("");

  const getReply = () => {
    fetch(`${url}/threads/${params.id}/posts?offset=${offSet}`)
      .then((responce) => responce.json())
      .then((data) => {
        setReplies(data.posts);
        console.log(data);
      });
  };

  const postReply = () => {
    const data = { post: replyContent };

    fetch(`${url}/threads/${params.id}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => setReplyContent(""))
      .then(() => getReply());
    console.log(data);
  };

  React.useEffect(() => {
    getReply();
  }, []);

  return (
    <div>
      <h2>　　投稿一覧</h2>
      <form className="mess">
        <input
          type="text"
          placeholder="投稿しよう！"
          value={replyContent}
          onChange={(event) => {
            setReplyContent(event.target.value);
          }}
          className="t2"
        />
        <button onClick={postReply} className="Button2">
          投稿
        </button>
      </form>
      {replies.map((mes, index) => {
        return (
          <div key={index} className="reply">
            <div className="in">　{mes.post}</div>
          </div>
        );
      })}
    </div>
  );
};
