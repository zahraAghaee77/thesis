import React from "react";
import "./Body.css";
import { ethers, BrowserProvider } from "ethers";
import { useState } from "react";
import ReqiurementEngineering from "../artifacts/contracts/RequirementEngineering.sol/RequirementEngineering.json";

const ReqiurementEngineeringContractAddress =
  "0xbc7cd1f1f5e77a7042fc6034e8e3818c60eb5900";

export default function Body(props) {
  const [reqiurementEngineer, setReqiurementEngineer] = useState();
  const [requirementAnalyst, setRequirementAnalyst] = useState();
  const [reqName, setReqName] = useState();
  const [reqDesc, setReqDesc] = useState();
  const [reqId, setReqId] = useState();
  const [reqType, setReqType] = useState();
  const [reqPriority, setReqPriority] = useState();
  const [reqRisk, setReqRisk] = useState();

  const addReqAnalyst = (e) => {
    const { name, value } = e.target;
    setRequirementAnalyst(value);
    console.log(name, value);
  };

  const addReqEngineer = (e) => {
    const { name, value } = e.target;
    setReqiurementEngineer(value);
    console.log(name, value);
  };

  const addReqName = (e) => {
    const { name, value } = e.target;
    setReqName(value);
    console.log(name, value);
  };

  const addReqDesc = (e) => {
    const { name, value } = e.target;
    setReqDesc(value);
    console.log(name, value);
  };

  const changeReqId = (e) => {
    const { name, value } = e.target;
    setReqId(value);
    console.log(name, value);
  };

  const changeType = (e) => {
    const { name, value } = e.target;
    setReqType(value);
    console.log(name, value);
  };

  const changePriority = (e) => {
    const { name, value } = e.target;
    setReqPriority(value);
    console.log(name, value);
  };

  const changeRisk = (e) => {
    const { name, value } = e.target;
    setReqRisk(value);
    console.log(name, value);
  };

  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const handleSubmitAddReqEng = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.addRequirementEngineer(reqiurementEngineer);
      console.log(contract.isRequirementEngineer(reqiurementEngineer));
    }
  };

  const handleSubmitAddReqAna = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.addRequirementAnalyst(requirementAnalyst);
      console.log(contract.isRequirementAnalyst(requirementAnalyst));
    }
  };

  const handleSubmitAddReq = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.addRequirement(reqName, reqDesc);
    }
  };

  const handleSubmitRemoveReq = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.removeRequirement(reqId);
    }
  };

  const handleSubmitValidateReq = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.validate(reqId);
    }
  };

  const handleSubmitRefineReq = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.refine(reqId, reqDesc, reqPriority, reqType, reqRisk);
    }
  };

  const handleSubmitVerifyReq = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      await contract.verify(reqId);
    }
  };

  if (props.action === "add req") {
    return (
      <div className="add--req--div">
        <form className="add--req--form" onSubmit={handleSubmitAddReq}>
          <label className="req--name--label" for="reName">
            Name:
          </label>
          <input
            type="text"
            id="reName"
            name="reName"
            onChange={addReqName}
          ></input>
          <label for="reqDescription">Description:</label>
          <input
            type="text"
            id="reqDescription"
            name="reqDescription"
            onChange={addReqDesc}
          ></input>
          <button className="add--req--button">Add Requirement</button>
        </form>
      </div>
    );
  } else if (props.action === "see req") {
    return (
      <div className="see--req--div">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Creator</th>
            <th>Requirement Engineer</th>
            <th>Requirement Analyst</th>
            <th>Manager</th>
            <th>Verified</th>
            <th>Validated</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Risk</th>
            <th>Stage</th>
          </tr>
        </table>
      </div>
    );
  } else if (props.action === "add req eng") {
    return (
      <div className="add--req--eng--div">
        <form className="add--req--eng--form" onSubmit={handleSubmitAddReqEng}>
          <label className="req--eng--label" name="reqEng">
            Requirement Engineer Address:
          </label>
          <input
            type="text"
            id="reqEng"
            name="reqEng"
            onChange={addReqEngineer}
          ></input>
          <button className="add--req--eng--button" type="submit">
            Add Requirement Engineer
          </button>
        </form>
      </div>
    );
  } else if (props.action === "add req ana") {
    return (
      <div className="add--req--ana--div">
        <form className="add--req--ana--form" onSubmit={handleSubmitAddReqAna}>
          <label className="req--ana--label" name="reqAna">
            Requirement Analyst Address:
          </label>
          <input
            type="text"
            id="reqAna"
            name="reqAna"
            onChange={addReqAnalyst}
          ></input>
          <button className="add--req--ana--button" type="submit">
            Add Requirement Analyst
          </button>
        </form>
      </div>
    );
  } else if (props.action === "remove req") {
    return (
      <div className="remove--req--div">
        <form className="remove--req--form" onSubmit={handleSubmitRemoveReq}>
          <label className="req--id--label" name="reqId">
            Requirement Id:
          </label>
          <input
            name="reqId"
            id="reqId"
            type="text"
            onChange={changeReqId}
          ></input>
          <button className="remove--req--button" type="submit">
            Remove Requirement
          </button>
        </form>
      </div>
    );
  } else if (props.action === "validate req") {
    return (
      <div className="validate--req--div">
        <form
          className="validate--req--form"
          onSubmit={handleSubmitValidateReq}
        >
          <label className="req--id--label" name="reqId">
            Requirement Id:
          </label>
          <input
            name="reqId"
            id="reqId"
            type="text"
            onChange={changeReqId}
          ></input>
          <button className="validate--req--button" type="submit">
            Validate Requirement
          </button>
        </form>
      </div>
    );
  } else if (props.action === "verify req") {
    return (
      <div className="verify--req--div">
        <form className="verify--req--form" onSubmit={handleSubmitVerifyReq}>
          <label className="req--id--label" name="reqId">
            Requirement Id:
          </label>
          <input
            name="reqId"
            id="reqId"
            type="text"
            onChange={changeReqId}
          ></input>
          <button className="verify--req--button" type="submit">
            Verify Requirement
          </button>
        </form>
      </div>
    );
  } else if (props.action === "refine req") {
    return (
      <div className="refine--req--div">
        <form className="refine--req--form" onSubmit={handleSubmitRefineReq}>
          <label className="req--id--label" name="reqId">
            Requirement Id:
          </label>
          <input
            name="reqId"
            id="reqId"
            type="text"
            required
            onChange={changeReqId}
          ></input>

          <label for="reqDescription">Description:</label>
          <input
            type="text"
            id="reqDescription"
            name="reqDescription"
            required
            onChange={addReqDesc}
          ></input>

          <label for="typeReq">Type:</label>
          <select id="typeReq" name="typeReq" required onChange={changeType}>
            <option value="functional">Functional</option>
            <option value="nonFunctional">Nonfunctional</option>
          </select>

          <label for="priorityReq">Priority:</label>
          <select
            id="priorityReq"
            name="priorityReq"
            required
            onChange={changePriority}
          >
            <option value="high">High</option>
            <option value="meduim">Medium</option>
            <option value="low">Low</option>
          </select>

          <label for="riskReq">Risk:</label>
          <select id="riskReq" name="riskReq" required onChange={changeRisk}>
            <option value="high">High</option>
            <option value="meduim">Medium</option>
            <option value="low">Low</option>
          </select>

          <button className="refine--req--button" type="submit">
            Refine Requirement
          </button>
        </form>
      </div>
    );
  }
  return <></>;
}
