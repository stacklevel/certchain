pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CertOrder.sol";


contract TestCertOrder {
    function createOrder() {
        CertOrder certOrder = CertOrder(DeployedAddresses.CertOrder());
        certOrder.register('megaAudit');

        bytes32 certInfo;
        address nextAddr;
        address appliedAuditor1;
        address appliedAuditor2;
        address appliedAuditor3;
        address appliedAuditor4;
        address appliedAuditor5;

        (certInfo, nextAddr, appliedAuditor1,
            appliedAuditor2, appliedAuditor3,
            appliedAuditor4, appliedAuditor5) = certOrder.getByAddress(msg.sender);



        Assert.equal(appliedAuditor1, appliedAuditor1, 'NOK');
    }
}
