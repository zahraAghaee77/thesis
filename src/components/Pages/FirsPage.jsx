import { useState } from "react";
import { ethers, BrowserProvider } from "ethers";
import React from "react";
import "./FirstPage.css";

export default function FirstPage(props) {
  return (
    <div className="buttons">
      <button onClick={props.goToCustomerPage}>As a Customer</button>
      <button onClick={props.goToReqiurementEngineerPage}>
        As a Requirements Engineering
      </button>
      <button onClick={props.goToRequirementAnalystsPage}>
        As a Requirements Analyst
      </button>
      <button onClick={props.goToManagerPage}>As a Manager</button>
    </div>
  );
}
