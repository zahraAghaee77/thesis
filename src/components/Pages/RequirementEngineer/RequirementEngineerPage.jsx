import React from "react";
import Body from "../../../components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../../components/Navbar";

export default function RequirementEngineerPage() {
  /*return (
    <>
      <Header user="engineer" />
      <Body action="refine req" />
    </>
  );
  */
  console.log("RequirementEngineerPage");
  return (
    <>
      <Router>
        <Navbar user={"engineer"} />
        <main className="main-content">
          <Routes className="">
            <Route path="/" element={<></>} />
            <Route path="/addReq" element={<Body action="add req" />} />
            <Route path="/refineReq" element={<Body action="refine req" />} />
            <Route path="/seeReq" element={<Body action="see req" />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
