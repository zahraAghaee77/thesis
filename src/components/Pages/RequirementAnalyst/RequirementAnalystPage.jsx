import React from "react";
import Header from "../../../components/Header";
import Body from "../../../components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../../components/Navbar";

export default function RequirementAnalystPage() {
  /*return (
    <>
      <Header user="analyst" />
      <Body action="validate req" />
    </>
  );*/

  return (
    <>
      <Router>
        <Navbar user="analyst" />
        <main className="main-content">
          <Routes className="">
            <Route path="/" element={<></>} />
            <Route path="/addReq" element={<Body action="add req" />} />
            <Route
              path="/validateReq"
              element={<Body action="validate req" />}
            />
            <Route path="/verifyReq" element={<Body action="verify req" />} />
            <Route path="/seeReq" element={<Body action="see req" />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
