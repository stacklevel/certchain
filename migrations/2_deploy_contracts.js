var Auditor = artifacts.require("./Auditor.sol");
var Manufacturer = artifacts.require("./Manufacturer.sol");
var Organ = artifacts.require("./Organ.sol");

module.exports = function(deployer) {
  deployer.deploy(Auditor);
  deployer.deploy(Manufacturer);
  deployer.deploy(Organ);
};
