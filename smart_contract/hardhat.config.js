// https://eth-ropsten.alchemyapi.io/v2/RlnfUbGQ4EBmGQMhDxvzsAfq804ze_xR

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/RlnfUbGQ4EBmGQMhDxvzsAfq804ze_xR",
      accounts: [ "5f464517288e782abdab8d25bdccdef32bcb3ea09390a5b00c76e3d385c7b740" ]
    }
  }
}
