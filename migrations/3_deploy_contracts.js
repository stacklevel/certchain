var Auditor = artifacts.require("./Auditor.sol");
var CertCoin = artifacts.require("./CertCoin.sol");
var Manufacturer = artifacts.require("./Manufacturer.sol");
var Organ = artifacts.require("./Organ.sol");

module.exports = function(deployer) {
  deployer.deploy(Auditor, CertCoin.address);
  deployer.deploy(Manufacturer, CertCoin.address);
  deployer.deploy(Organ);
};
