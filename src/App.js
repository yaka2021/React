import * as React from "react";
import { Header } from "./Header.js";
import { ThreadList } from "./ThreadList.js";
import { MakeThread } from "./MakeThread.js";
import { NoMatch } from "./NoMatch.js";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/thread" element={<ThreadList />} />
        <Route path="/thread/new" element={<MakeThread />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};
