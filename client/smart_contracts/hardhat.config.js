require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
const dotenv = require('dotenv');
var secret = require('./secret.json');

dotenv.config;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.11',

  defaultNetwork: 'mumbai',

  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/Vf7IaouUK6U3pWFBxiPwhb1351Misaz-',
      accounts: [secret.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: secret.POLYGONSCAN_API_KEY,
  },
};
