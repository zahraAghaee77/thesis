// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Reqiurement {
    enum Stage {
        Defined,
        Refined,
        Verified,
        Validated,
        Finished
    }
    enum Type {
        Functional,
        NonFunctional
    }
    enum Priority {
        Low,
        Medium,
        High
    }
    enum Risk {
        Low,
        Medium,
        High
    }

    uint256 id;
    string name;
    address creator;
    address requirementEngineer;
    address requirementAnalyst;
    address manager;
    string description;
    bool verified;
    bool validated;
    Type typeOfIt;
    Priority priority;
    Risk risk;
    Stage stage = Stage.Defined;

    constructor(
        uint256 _id,
        string memory _name,
        string memory _description,
        address _creator,
        address _manager
    ) {
        id = _id;
        name = _name;
        description = _description;
        creator = _creator;
        manager = _manager;
        verified = false;
        validated = false;
        stage = Stage.Refined;
    }

    modifier rightRange(uint256 max, uint256 range) {
        require(range < max, "Bad range.");
        _;
    }
    modifier rightStage(uint256 correctStage) {
        require(getStage() == correctStage, "Incorrect Stage!");
        _;
    }
    modifier onlyUnverified() {
        require(!verified, "It has been verified.");
        _;
    }

    modifier onlyUnvalidated() {
        require(!validated, "It has been validated.");
        _;
    }

    function validate() public onlyUnvalidated rightStage(3) {
        validated = true;
    }

    function verify() public onlyUnverified rightStage(2) {
        verified = true;
    }

    function isVerified() public view returns (bool) {
        return verified;
    }

    function isValidate() public view returns (bool) {
        return validated;
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function getDescription() public view returns (string memory) {
        return description;
    }

    function getCreator() public view returns (address) {
        return creator;
    }

    function getId() public view returns (uint256) {
        return id;
    }

    function getType() public view returns (uint256) {
        return uint256(typeOfIt);
    }

    function getPriority() public view returns (uint256) {
        return uint256(priority);
    }

    function getRisk() public view returns (uint256) {
        return uint256(risk);
    }

    function getStage() public view returns (uint256) {
        return uint256(stage);
    }

    function setType(
        uint256 _typeOfIt
    ) public rightRange(2, _typeOfIt) rightStage(1) {
        if (_typeOfIt == 0) {
            typeOfIt = Type.Functional;
        } else {
            typeOfIt = Type.NonFunctional;
        }
    }

    function typeToString() public view returns (string memory) {
        if (typeOfIt == Type.Functional) {
            return "functional";
        } else {
            return "Non-Functional";
        }
    }

    function setPriority(
        uint256 _priority
    ) public rightRange(3, _priority) rightStage(1) {
        if (_priority == 0) {
            priority = Priority.Low;
        } else if (_priority == 1) {
            priority = Priority.Medium;
        } else {
            priority = Priority.High;
        }
    }

    function priorityToString() public view returns (string memory) {
        if (priority == Priority.Low) {
            return "low";
        } else if (priority == Priority.Medium) {
            return "medium";
        } else {
            return "high";
        }
    }

    function setRisk(uint256 _risk) public rightRange(3, _risk) rightStage(1) {
        if (_risk == 0) {
            risk = Risk.Low;
        } else if (_risk == 1) {
            risk = Risk.Medium;
        } else {
            risk = Risk.High;
        }
    }

    function riskToString() public view returns (string memory) {
        if (risk == Risk.Low) {
            return "low";
        } else if (risk == Risk.Medium) {
            return "medium";
        } else {
            return "high";
        }
    }

    function setStage(uint256 _stage) public rightRange(5, _stage) {
        if (_stage == 0) {
            stage = Stage.Defined;
        } else if (_stage == 1) {
            stage = Stage.Refined;
        } else if (_stage == 2) {
            stage = Stage.Verified;
        } else if (_stage == 3) {
            stage = Stage.Validated;
        } else {
            stage = Stage.Finished;
        }
    }

    function stageToString() public view returns (string memory) {
        if (stage == Stage.Defined) {
            return "defined";
        } else if (stage == Stage.Refined) {
            return "refined";
        } else if (stage == Stage.Verified) {
            return "verified";
        } else if (stage == Stage.Validated) {
            return "Validated";
        } else {
            return "finished";
        }
    }

    function setDescription(string memory _description) public rightStage(1) {
        description = _description;
    }

    function setRequirementEngineer(address _reqEngineer) public {
        requirementEngineer = _reqEngineer;
    }

    function setRequirementAnalyst(address _reqAnalyst) public {
        requirementAnalyst = _reqAnalyst;
    }

    function toString(address account) public pure returns (string memory) {
        return toString(abi.encodePacked(account));
    }

    function toString(uint256 value) public pure returns (string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes32 value) public pure returns (string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bool value) public pure returns (string memory) {
        if (value) {
            return "true";
        } else {
            return "false";
        }
    }

    function toString(bytes memory data) public pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(2 + data.length * 2);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < data.length; i++) {
            str[2 + i * 2] = alphabet[uint256(uint8(data[i] >> 4))];
            str[3 + i * 2] = alphabet[uint256(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }

    function seeReq1() public view returns (string memory) {
        string memory id_str = toString(id);
        id_str = string.concat("id: ", id_str, " , ");

        string memory name_str = string.concat("name: ", name, " , ");

        string memory des_str = string.concat(
            "description: ",
            description,
            " , "
        );

        string memory validated_str = toString(validated);
        validated_str = string.concat("validated: ", validated_str, " , ");

        string memory verified_str = toString(verified);
        verified_str = string.concat("verified: ", verified_str, " , ");

        return
            string.concat(
                id_str,
                name_str,
                des_str,
                verified_str,
                validated_str
            );
    }

    function seeReq2() public view returns (string memory) {
        string memory typeOfIt_str = typeToString();
        typeOfIt_str = string.concat("type: ", typeOfIt_str, " , ");

        string memory priority_str = priorityToString();
        priority_str = string.concat("priority: ", priority_str, " , ");

        string memory risk_str = riskToString();
        risk_str = string.concat("risk: ", risk_str, " , ");

        string memory stage_str = stageToString();
        stage_str = string.concat("stage: ", stage_str, " , ");

        return string.concat(typeOfIt_str, priority_str, risk_str, stage_str);
    }

    function seeReq3() public view returns (string memory) {
        string memory creator_str = toString(creator);
        creator_str = string.concat("creator: ", creator_str, " , ");

        string memory requirementEngineer_str = toString(requirementEngineer);
        requirementEngineer_str = string.concat(
            "requirement engineer: ",
            requirementEngineer_str,
            " , "
        );

        string memory requirementAnalyst_str = toString(requirementAnalyst);
        requirementAnalyst_str = string.concat(
            "requirement analyst: ",
            requirementAnalyst_str,
            " , "
        );

        string memory manager_str = toString(manager);
        manager_str = string.concat("manager: ", manager_str, " , ");

        return
            string.concat(
                creator_str,
                requirementEngineer_str,
                requirementAnalyst_str,
                manager_str
            );
    }

    function seeReq() public view returns (string memory) {
        string memory a = seeReq1();
        string memory b = seeReq2();
        string memory c = seeReq3();
        return string.concat(a, b, c);
    }
}

contract RequirementEngineering {
    uint256 numbersOfReqiurements;
    Reqiurement[] requirements;
    mapping(uint256 => bool) public availableRequirements;
    address public manager;
    address[] public requirementEngineers;
    mapping(address => bool) public availableRequirementEngineers;
    address[] public requirementAnalysts;
    mapping(address => bool) public availableRequirementAnalyst;

    constructor() {
        manager = msg.sender;
        numbersOfReqiurements = 0;
    }

    modifier onlyByManager() {
        require(msg.sender == manager, "Only by manager.");
        _;
    }

    modifier onlyByrequirementEngineer() {
        require(
            availableRequirementEngineers[msg.sender],
            "Only by Requirement Engineers"
        );
        _;
    }

    modifier onlyByrequirementAnalyst() {
        require(
            availableRequirementAnalyst[msg.sender],
            "Only by Requirement Analysts"
        );
        _;
    }

    modifier isNewRequirementEngineer(address _reqEngineer) {
        require(
            !availableRequirementEngineers[_reqEngineer],
            "This Requirement Engineer has already existed!"
        );
        _;
    }

    modifier isNewRequirementAnalyst(address _reqAnalyst) {
        require(
            !availableRequirementAnalyst[_reqAnalyst],
            "This Requirement Analyst has already existed!"
        );
        _;
    }

    modifier isAvailable(uint256 _reqNumber) {
        require(contains(_reqNumber), "Not available.");
        _;
    }

    function getManager() public view returns (address) {
        return manager;
    }

    function isRequirementEngineer(address rqEn) public view returns (bool) {
        return availableRequirementEngineers[rqEn];
    }

    function isRequirementAnalyst(address rqAn) public view returns (bool) {
        return availableRequirementAnalyst[rqAn];
    }

    function addRequirementEngineer(
        address _reqEngineer
    ) public onlyByManager isNewRequirementEngineer(_reqEngineer) {
        requirementEngineers.push(_reqEngineer);
        availableRequirementEngineers[_reqEngineer] = true;
    }

    function addRequirementAnalyst(
        address _reqAnalyst
    ) public onlyByManager isNewRequirementAnalyst(_reqAnalyst) {
        requirementAnalysts.push(_reqAnalyst);
        availableRequirementAnalyst[_reqAnalyst] = true;
    }

    function addRequirement(
        string memory _name,
        string memory _description
    ) public {
        Reqiurement req = new Reqiurement(
            numbersOfReqiurements,
            _name,
            _description,
            msg.sender,
            manager
        );
        requirements.push(req);
        availableRequirements[numbersOfReqiurements] = true;
        numbersOfReqiurements++;
    }

    function changeDescriptionOfRequirement(
        uint256 _reqNumber,
        string memory _description
    ) internal onlyByrequirementEngineer isAvailable(_reqNumber) {
        (uint256 index, ) = indexOf(_reqNumber);
        requirements[index].setDescription(_description);
    }

    function changePriority(
        uint256 _reqNumber,
        uint256 _priority
    ) internal onlyByrequirementEngineer isAvailable(_reqNumber) {
        (uint256 index, ) = indexOf(_reqNumber);
        requirements[index].setPriority(_priority);
    }

    function changeType(
        uint256 _reqNumber,
        uint256 _type
    ) internal onlyByrequirementEngineer isAvailable(_reqNumber) {
        (uint256 index, ) = indexOf(_reqNumber);
        requirements[index].setType(_type);
        requirements[index].setRequirementEngineer(msg.sender);
    }

    function changeRisk(
        uint256 _reqNumber,
        uint256 _risk
    ) internal onlyByrequirementEngineer isAvailable(_reqNumber) {
        (uint256 index, ) = indexOf(_reqNumber);
        requirements[index].setRisk(_risk);
    }

    function refine(
        uint256 _reqNumber,
        string memory _description,
        uint256 _priority,
        uint256 _type,
        uint256 _risk
    ) public onlyByrequirementEngineer isAvailable(_reqNumber) {
        changeDescriptionOfRequirement(_reqNumber, _description);
        changePriority(_reqNumber, _priority);
        changeType(_reqNumber, _type);
        changeRisk(_reqNumber, _risk);
        (uint256 index, ) = indexOf(_reqNumber);
        requirements[index].setStage(2);
    }

    function verify(
        uint256 _reqNumber
    ) public onlyByrequirementAnalyst isAvailable(_reqNumber) {
        (uint256 index, ) = indexOf(_reqNumber);
        requirements[index].verify();
        requirements[index].setRequirementAnalyst(msg.sender);
        requirements[index].setStage(3);
    }

    function validate(
        uint256 _reqNumber
    ) public onlyByrequirementAnalyst isAvailable(_reqNumber) {
        (uint256 index, ) = indexOf(_reqNumber);
        requirements[index].validate();
        requirements[index].setRequirementAnalyst(msg.sender);
        requirements[index].setStage(4);
    }

    function removeRequirement(
        uint256 _reqNumber
    ) public onlyByManager isAvailable(_reqNumber) {
        (uint256 index, ) = indexOf(_reqNumber);
        remove(index);
    }

    function indexOf(uint256 _reqNumber) public view returns (uint256, bool) {
        uint256 length = requirements.length;
        for (uint256 i = 0; i < length; i++) {
            if (requirements[i].getId() == _reqNumber) {
                return (i, true);
            }
        }
        return (0, false);
    }

    function contains(uint256 _reqNumber) public view returns (bool) {
        (, bool isIn) = indexOf(_reqNumber);
        return isIn;
    }

    function remove(uint256 index) internal returns (uint256) {
        uint256 length = requirements.length;
        if (index >= length) {
            revert("Error: index out of bounds");
        }
        uint256 entry = requirements[index].getId();
        for (uint256 i = index; i < length - 1; i++) {
            requirements[i] = requirements[i + 1];
        }
        requirements.pop();
        return (entry);
    }

    function seeReq(uint _reqNumber) public view returns (string memory) {
        (uint256 index, ) = indexOf(_reqNumber);
        return requirements[index].seeReq();
    }

    function seeAllReq() public view returns (string memory) {
        uint256 length = requirements.length;
        string memory a = "";
        for (uint256 i = 0; i < length; i++) {
            string memory temp = requirements[i].seeReq();
            a = string.concat(a, " ... ", temp);
        }
        return a;
    }

    function isRequirement(uint _reqNumber) public view returns (bool) {
        return availableRequirements[_reqNumber];
    }

    function getNumbersOfReqiurements() public view returns (uint256) {
        return numbersOfReqiurements;
    }
}
