require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.19",
    networks: {
        hardhat: {
            chainID: 31337,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            chainID: 31337
        },
    },
    paths: {
        sources: "./contracts",
        artifacts: "./artifacts",
    },
};
