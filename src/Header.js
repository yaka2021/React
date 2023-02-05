import * as React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div id="title">掲示板</div>　
      <Link to="/thread/new" id="mkThread">
        スレッドをたてる
      </Link>
    </header>
  );
};
