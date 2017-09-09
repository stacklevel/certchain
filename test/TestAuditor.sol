pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Auditor.sol";

contract TestAuditor {

    function testHaedAddr() {
        Auditor auditor = Auditor(DeployedAddresses.Auditor());

        auditor.register("a", "BSU", "MegaCert", "+3753300000", "test@test.com");

        bytes32 name;
        bytes32 education;
        bytes32 certInfo;
        bytes32 phoneNumber;
        bytes32 email;
        address f;

        (name, education, certInfo, phoneNumber, email, f) = auditor.getByAddress(msg.sender);

        Assert.equal(name, name, 'NOK');
  }

}
