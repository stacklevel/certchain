var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Auditor = artifacts.require("./Auditor.sol");


module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Auditor);
};
