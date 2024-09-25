import { useState } from "react";
import { ethers, BrowserProvider } from "ethers";
import React from "react";
import "./App.css";

import ReqiurementEngineering from "./artifacts/contracts/RequirementEngineering.sol/RequirementEngineering.json";
import ManagerPage from "./components/Pages/Manager/ManagerPage";
import FirstPage from "./components/Pages/FirsPage";
import CustomerPage from "./components/Pages/Customer/CustomerPage";
import RequirementEngineerPage from "./components/Pages/RequirementEngineer/RequirementEngineerPage";
import RequirementAnalystPage from "./components/Pages/RequirementAnalyst/RequirementAnalystPage";

const ReqiurementEngineeringContractAddress =
  "0xbc7cd1f1f5e77a7042fc6034e8e3818c60eb5900";

function App() {
  const [nextPage, setNextPage] = useState("firstPage");
  /*
  const addReqEng = async (newReqEng) => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.addRequirementEngineer(newReqEng);
      console.log(contract.isRequirementEngineer(newReqEng));
    }
  };

  const addReqAna = async (newReqAna) => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.addRequirementAnalyst(newReqAna);
      console.log(contract.isRequirementAnalyst(newReqAna));
    }
  };

  const removeReq = (id) => {};
*/
  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const goToManagerPage = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      const manager = await contract.getManager();
      console.log(manager, signer.address);
      if (manager === signer.address) {
        setNextPage("managerPage");
        console.log(nextPage);
      }
    }
  };

  const goToReqiurementEngineerPage = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      console.log(signer.address);
      if (await contract.isRequirementEngineer(signer.address)) {
        console.log("you did it.");
        setNextPage("engineerPage");
        console.log(nextPage);
      }
    }
  };
  const goToRequirementAnalystsPage = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );

      if (await contract.isRequirementAnalyst(signer.address)) {
        setNextPage("analystPage");
      }
    }
  };

  const goToCustomerPage = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      setNextPage("customerPage");
    }
  };
  return (
    <>
      {nextPage === "firstPage" && (
        <FirstPage
          goToManagerPage={goToManagerPage}
          goToCustomerPage={goToCustomerPage}
          goToReqiurementEngineerPage={goToReqiurementEngineerPage}
          goToRequirementAnalystsPage={goToRequirementAnalystsPage}
        />
      )}{" "}
      {nextPage === "managerPage" && <ManagerPage />}
      {nextPage === "customerPage" && <CustomerPage />}
      {nextPage === "engineerPage" && <RequirementEngineerPage />}
      {nextPage === "analystPage" && <RequirementAnalystPage />}
    </>
  );
}

export default App;
