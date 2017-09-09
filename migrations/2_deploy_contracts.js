var Auditor = artifacts.require("./Auditor.sol");
var Manufacturer = artifacts.require("./Manufacturer.sol");
var Organ = artifacts.require("./Organ.sol");
var CertOrder = artifacts.require("./CertOrder.sol");

module.exports = function(deployer) {
  deployer.deploy(Auditor).then(function() {
      deployer.deploy(CertOrder, Auditor.address)
  });
  deployer.deploy(Manufacturer);
  deployer.deploy(Organ);
};
