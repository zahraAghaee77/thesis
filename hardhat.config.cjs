require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-deploy");

const { PRIVATE_KEY, INFURA_ALFAJORES_URL } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    alfajores: {
      chainId: 44787,
      url: INFURA_ALFAJORES_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
