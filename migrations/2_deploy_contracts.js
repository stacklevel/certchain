var Auditor = artifacts.require("./Auditor.sol");
var Manufacturer = artifacts.require("./Manufacturer.sol");
var Organ = artifacts.require("./Organ.sol");
var CertOrder = artifacts.require("./CertOrder.sol");

module.exports = function(deployer) {
  deployer.deploy(Auditor);
  deployer.deploy(Manufacturer);
  deployer.deploy(Organ);
  deployer.deploy(CertOrder);
};
