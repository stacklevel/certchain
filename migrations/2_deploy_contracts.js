var Auditor = artifacts.require("./Auditor.sol");
var Manufacturer = artifacts.require("./Manufacturer.sol");
var Organ = artifacts.require("./Organ.sol");
var CertOrder = artifacts.require("./CertOrder.sol");
var CertCoin = artifacts.require("./CertCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(CertCoin, 1000, 'CertCoin', 8, 'CRT', '0xba826583aa756c9bc549a3ecb54a95babcd1545f').then(function() {
    deployer.deploy(Auditor, CertCoin.address).then(function() {
      deployer.deploy(CertOrder, Auditor.address)
    });
    deployer.deploy(Manufacturer);
    deployer.deploy(Organ);
  });
};
