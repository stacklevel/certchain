pragma solidity ^0.4.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Auditor.sol";

contract TestAuditor {
    function testRegister() {
        Auditor auditor = Auditor(DeployedAddresses.Auditor());

        auditor.register("MegaAuditor", "BSU", "MegaCert", "+3753300000", "test@test.com");
//        a.getHeadAddr();
//        Assert.equal("123", "123", "NOK");
//        Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

}
