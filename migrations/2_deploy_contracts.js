var Auditor = artifacts.require("./Auditor.sol");
var Manufacturer = artifacts.require("./Manufacturer.sol");

module.exports = function(deployer) {
  deployer.deploy(Auditor);
  deployer.deploy(Manufacturer);
};
