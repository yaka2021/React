import * as React from "react";
import { Header } from "./Header.js";
import { ThreadList } from "./ThreadList.js";
import { MakeThread } from "./MakeThread.js";
import { Thread } from "./Thread.js";
import { NoMatch } from "./NoMatch.js";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  const root = "/thread";
  return (
    <div>
      <Header />
      <Routes>
        <Route path={`${root}`} element={<ThreadList />} />
        <Route path={`${root}/:id`} element={<Thread />} />
        <Route path={`${root}/new`} element={<MakeThread />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};
