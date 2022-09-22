require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic =
  'plunge volume start result man badge exist team supply over expand nasty';

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*',
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          'https://rinkeby.infura.io/v3/0f79e3b4e6a041eb96f5006c61c05c14'
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './client-fe/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
