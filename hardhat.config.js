require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const PRIVATE_KEY = fs.readFileSync(".secret").toString()
const projectId = "1da022c780534dd0accd3be9975754f3"

const POLYGONSCAN_API_KEY = "4WWCP9RPBEQE7K41NAIGY36UGH5DHQMX4C"
// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337
//     },
//     aurora: {
//       url: `https://aurora-testnet.infura.io/v3/${projectId}`,
//       accounts: [privateKey]
//     },
//     mainnet: {
//       url: `https://mainnet.infura.io/v3/${projectId}`,
//       accounts: [privateKey]
//     }
//   },
//   solidity: "0.8.4",
// };

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      chainId: 1337
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.4"
  }
}