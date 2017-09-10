var Auditor = artifacts.require("./Auditor.sol");
var CertCoin = artifacts.require("./CertCoin.sol");
var CertOrder = artifacts.require("./CertOrder.sol");

module.exports = function(deployer) {
  deployer.deploy(CertOrder, CertCoin.address, Auditor.address)
};
