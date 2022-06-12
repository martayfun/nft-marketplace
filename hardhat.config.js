require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "1da022c780534dd0accd3be9975754f3"
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    aurora: {
      url: `https://aurora-testnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
