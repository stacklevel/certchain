var CertCoin = artifacts.require("./CertCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(CertCoin);
};