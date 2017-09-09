var Auditor = artifacts.require("./Auditor.sol");

module.exports = function(deployer) {
  deployer.deploy(Auditor);
};
