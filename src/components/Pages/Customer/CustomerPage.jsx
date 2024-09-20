import React from "react";
import Header from "../../../components/Header";
import Body from "../../../components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../../components/Navbar";

export default function CustomerPage() {
  /*return (
    <>
      <Header user="customer" />
      <Body action="add req" />
    </>
  );*/
  return (
    <>
      <Router>
        <Navbar user="customer" />
        <main className="main-content">
          <Routes className="">
            <Route path="/" element={<></>} />
            <Route path="/addReq" element={<Body action="add req" />} />
            <Route path="/seeReq" element={<Body action="see req" />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
