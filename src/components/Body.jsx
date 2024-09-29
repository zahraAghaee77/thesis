import React from "react";
import "./Body.css";
import { ethers, BrowserProvider } from "ethers";
import { useState, useEffect } from "react";
import ReqiurementEngineering from "../artifacts/contracts/RequirementEngineering.sol/RequirementEngineering.json";

const ReqiurementEngineeringContractAddress =
  "0x5A6fDc20B1C0dAA5a21aC904a4cA238e43DAf757";

import BigNumber from "bignumber.js";

export default function Body(props) {
  const [reqiurementEngineer, setReqiurementEngineer] = useState();
  const [requirementAnalyst, setRequirementAnalyst] = useState();
  const [reqName, setReqName] = useState();
  const [reqDesc, setReqDesc] = useState();
  const [reqId, setReqId] = useState();
  const [reqType, setReqType] = useState();
  const [reqPriority, setReqPriority] = useState();
  const [reqRisk, setReqRisk] = useState();
  const [reqiurements, setReqiurement] = useState([]);
  const [reqss, setReqss] = useState();
  var reqs = [];

  useEffect(() => {
    async function fetchData() {
      if (typeof window.ethereum !== "undefined") {
        await requestAccount();
        const web3Provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await web3Provider.getSigner();
        const contract = new ethers.Contract(
          ReqiurementEngineeringContractAddress,
          ReqiurementEngineering.abi,
          signer
        );
        const allReqs = await contract.seeAllReq();
        setReqss(allReqs);

        /*const countsBigNumber = await contract.getNumbersOfReqiurements();
        const uint256Value = new BigNumber(countsBigNumber);
        const counts = uint256Value.toNumber();
        //console.log(uint256Value.toString());
        //console.log(counts);

        for (let reqNumber = 0; reqNumber < counts; reqNumber++) {
          if (await contract.isRequirement(reqNumber)) {
            //console.log("hiiiii");

            var req1 = await contract.seeReq(reqNumber);
            const req = req1.substr(0, req1.length - 3);
            const a = createObj(req);
            //setReqiurement([...reqiurements, a]);
            setReqiurement([...reqiurements, a]);
            console.log(reqs, "ffffffffffffffffffff");
            //reqs.push(createObj(req));
          }
        }*/
      }
    }
    fetchData();
  }, []);

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
    const uint256Value = BigInt(value);
    setReqId(uint256Value);
    console.log(uint256Value, value, name);
  };

  const changeType = (e) => {
    const { name, value } = e.target;

    var t;
    if (value === "functional") {
      t = 0;
    } else {
      t = 1;
    }
    setReqType(t);
    console.log(name, value, t);
  };

  const changePriority = (e) => {
    const { name, value } = e.target;
    var p;
    if (value === "low") {
      p = 0;
    } else if (value === "meduim") {
      p = 1;
    } else {
      p = 2;
    }
    setReqPriority(p);
    console.log(name, value, p);
  };

  const changeRisk = (e) => {
    const { name, value } = e.target;
    var r;
    if (value === "low") {
      r = 0;
    } else if (value === "meduim") {
      r = 1;
    } else {
      r = 2;
    }
    setReqRisk(r);
    console.log(name, value, r);
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
      console.log(reqPriority, reqType, reqRisk);
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

  const readReqs = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const contract = new ethers.Contract(
        ReqiurementEngineeringContractAddress,
        ReqiurementEngineering.abi,
        signer
      );
      const countsBigNumber = await contract.getNumbersOfReqiurements();
      const uint256Value = new BigNumber(countsBigNumber);
      const counts = uint256Value.toNumber();
      //console.log(uint256Value.toString());
      //console.log(counts);

      for (let reqNumber = 0; reqNumber < counts; reqNumber++) {
        if (await contract.isRequirement(reqNumber)) {
          //console.log("hiiiii");

          var req1 = await contract.seeReq(reqNumber);
          const req = req1.substr(0, req1.length - 3);
          const a = createObj(req);
          //setReqiurement([...reqiurements, a]);
          reqs.push(a);
          console.log(reqs, "ffffffffffffffffffff");
          //reqs.push(createObj(req));
        }
      }
      //const headers = Object.keys(reqs[0]);
      //const rows = reqs.map((item) => Object.values(item));

      /*<div className="see--req--div">
          <table>
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header}>{capitalize(header)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>*/

      //console.log(reqs.length);
    }
  };

  const createObj = (params) => {
    var items = params.split(" , ");
    var jsonStrig = "{";
    for (var i = 0; i < items.length; i++) {
      var current = items[i].split(": ");
      jsonStrig += '"' + current[0] + '":"' + current[1] + '",';
    }
    jsonStrig = jsonStrig.substr(0, jsonStrig.length - 1);
    jsonStrig += "}";
    var obj = JSON.parse(jsonStrig);
    //console.log(obj);
    return obj;
  };

  const seprateReqs = (params) => {
    var items = params.split(" ... ");
  };

  const capitalize = (word) => {
    //console.log(word);
    return word[0].toUpperCase() + word.slice(1);
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
    /*var items = reqss.split(" ... ");
    const rqs = [];
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      const rq = createObj(element);
      rqs.push(rq);
    }*/
    return (
      <div className="see--req--div">
        <p>{reqss}</p>
      </div>
    );

    /*
    console.log(reqiurements.length, "hhhhhhhhhh");
    const headers = Object.keys(reqiurements[0]);
    const rows = reqiurements.map((item) => Object.values(item));

    return (
      <div className="see--req--div">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{capitalize(header)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );*/
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
