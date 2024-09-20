import React from "react";
import Body from "../../../components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../../components/Navbar";

export default function ManagerPage() {
  /*return (
    <>
      <Header user="manager" />
      <Body action="refine req" />
    </>
  );*/

  return (
    <>
      <Router>
        <Navbar user={"manager"} />
        <main className="main-content">
          <Routes className="">
            <Route path="/" element={<></>} />
            <Route
              path="/addReqEngineer"
              element={<Body action="add req eng" />}
            />
            <Route
              path="/addReqAnalyst"
              element={<Body action="add req ana" />}
            />
            <Route path="/removeReq" element={<Body action="remove req" />} />
            <Route path="/seeReq" element={<Body action="see req" />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
