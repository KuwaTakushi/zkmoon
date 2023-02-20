require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-etherscan');
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.15",
  settings: {
    optimizer: {
      enabled: true
    }
  },
  networks: {
    /** ========== TESTNET ========== */
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/[KEY]",
      accounts: [process.env.ADMIN]
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/[KEY]",
      chainId: 97,
      accounts: [process.env.ADMIN]
    },

    /** ========== MAINNET ========== */
    ethMainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/[KEY]",
      accounts: [process.env.ADMIN]
    },
    polygonMainnet: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/[KEY]",
      accounts: [process.env.ADMIN]
    },
    bscMainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 100000000,
      accounts: [process.env.ADMIN]
    },
  },

  /**etherscan api key */
  etherscan: {
    apiKey: process.env.POLYGONSCAN_KEY
  }
};
