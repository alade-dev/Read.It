const CoffeeTip = artifacts.require('./coffeeTip.sol');

module.exports = function (deployer, network, accounts) {
  deployer.deploy(CoffeeTip, { from: accounts[0] });
};
