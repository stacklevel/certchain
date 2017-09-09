pragma solidity ^0.4.4;

import "../contracts/Auditor.sol";


contract CertOrder {

    struct certOrder {
        bytes32 certInfo;
        address appliedAuditor1;
        address appliedAuditor2;
        address appliedAuditor3;
        address appliedAuditor4;
        address appliedAuditor5;

        address selectedAuditor;

        bytes32 secretInformation;
        bytes32 auditorResolution;

        address nextAddr;

    }

    address public headAddr;



    mapping (address => certOrder) public certOrderInfo;


    function register (bytes32 certInfo) {
        certOrderInfo[msg.sender].certInfo = certInfo;

        certOrderInfo[msg.sender].nextAddr = headAddr;
        headAddr = msg.sender;
    }


    function getByAddress(address manufacturerAddress) constant returns (bytes32, address,
                                                                        address, address, address, address, address) {


    return (certOrderInfo[manufacturerAddress].certInfo,
            certOrderInfo[manufacturerAddress].nextAddr,
            certOrderInfo[manufacturerAddress].appliedAuditor1,
            certOrderInfo[manufacturerAddress].appliedAuditor2,
            certOrderInfo[manufacturerAddress].appliedAuditor3,
            certOrderInfo[manufacturerAddress].appliedAuditor4,
            certOrderInfo[manufacturerAddress].appliedAuditor5
        );

    }

    function apply(address manufacturerAddress, address auditorContractAddr) returns (bool res){
        Auditor a = Auditor(auditorContractAddr);

        bytes32 name;
        bytes32 education;
        bytes32 certInfo;
        bytes32 phoneNumber;
        bytes32 email;
        address nextAuditorAddress;

        (name, education, certInfo, phoneNumber, email, nextAuditorAddress) = a.getByAddress(msg.sender);

        if(certInfo == certOrderInfo[manufacturerAddress].certInfo){

            res = true;
            if (certOrderInfo[manufacturerAddress].appliedAuditor1 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor1 = msg.sender;
            }else if (certOrderInfo[manufacturerAddress].appliedAuditor2 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor2 = msg.sender;
            }else if (certOrderInfo[manufacturerAddress].appliedAuditor3 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor3 = msg.sender;
            }else if (certOrderInfo[manufacturerAddress].appliedAuditor4 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor4 = msg.sender;
            }else if (certOrderInfo[manufacturerAddress].appliedAuditor5 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor5 = msg.sender;
            }else{
                res = false;
            }
        }else{
            res = false;
        }
    }

    function selectAuditor(address auditorAddress){
        if (certOrderInfo[msg.sender].appliedAuditor1 == auditorAddress ||
            certOrderInfo[msg.sender].appliedAuditor2 == auditorAddress ||
            certOrderInfo[msg.sender].appliedAuditor3 == auditorAddress ||
            certOrderInfo[msg.sender].appliedAuditor4 == auditorAddress ||
            certOrderInfo[msg.sender].appliedAuditor5 == auditorAddress){

            certOrderInfo[msg.sender].selectedAuditor = auditorAddress;

        }
    }


    function getSelectedAuditor(address manufacturerAddress) constant returns (address){
        return certOrderInfo[manufacturerAddress].selectedAuditor;
    }

    function getSecretInformation(address manufacturerAddress) constant returns (bytes32){
        if(msg.sender == manufacturerAddress || certOrderInfo[manufacturerAddress].selectedAuditor == msg.sender){
            return certOrderInfo[manufacturerAddress].secretInformation;
        }
    }

    function setAuditorResolution(address manufacturerAddress, bytes32 resolution){
        if (certOrderInfo[manufacturerAddress].selectedAuditor == msg.sender){
            certOrderInfo[manufacturerAddress].auditorResolution == resolution;
        }

    }

    function getAuditorResolution(address manufacturerAddress) constant returns (bytes32){
        return certOrderInfo[manufacturerAddress].auditorResolution;
    }


}
