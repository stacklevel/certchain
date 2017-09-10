pragma solidity ^0.4.4;

import "../contracts/Auditor.sol";


contract CertOrder {

    address auditorContractAddress;
    address certCoinContractAddress;

    function CertOrder(address certCoinAddr, address auditorContractAddr){
        certCoinContractAddress = certCoinAddr;
        auditorContractAddress = auditorContractAddr;
    }

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

    struct auditorOffers{
        uint offer1;
        uint offer2;
        uint offer3;
        uint offer4;
        uint offer5;
    }

    address public headAddr;

    mapping (address => certOrder) public certOrderInfo;
    mapping (address => auditorOffers) public auditorOffersInfo;


    function register (bytes32 certInfo, bytes32 secretInformation) {
        certOrderInfo[msg.sender].certInfo = certInfo;
        certOrderInfo[msg.sender].secretInformation = secretInformation;

        certOrderInfo[msg.sender].nextAddr = headAddr;
        headAddr = msg.sender;
    }


    function getByAddress(address manufacturerAddress) constant returns (bytes32 certInfo, address nextAddr,
                                                                        address appliedAuditor1, address appliedAuditor2,
                                                                        address appliedAuditor3, address appliedAuditor4,
                                                                        address appliedAuditor5, address selectedAuditor) {


     certInfo = certOrderInfo[manufacturerAddress].certInfo;
     nextAddr = certOrderInfo[manufacturerAddress].nextAddr;
     appliedAuditor1 = certOrderInfo[manufacturerAddress].appliedAuditor1;
     appliedAuditor2 = certOrderInfo[manufacturerAddress].appliedAuditor2;
     appliedAuditor3 = certOrderInfo[manufacturerAddress].appliedAuditor3;
     appliedAuditor4 = certOrderInfo[manufacturerAddress].appliedAuditor4;
     appliedAuditor5 = certOrderInfo[manufacturerAddress].appliedAuditor5;
     selectedAuditor = certOrderInfo[manufacturerAddress].selectedAuditor;

    }

    function apply(address manufacturerAddress, uint offer) returns (bool){
        Auditor auditorContract = Auditor(auditorContractAddress);

        bytes32 name;
        bytes32 education;
        bytes32 certInfo;
        bytes32 phoneNumber;
        bytes32 email;
        address nextAuditorAddress;

        (name, education, certInfo, phoneNumber, email, nextAuditorAddress) = auditorContract.getByAddress(msg.sender);

        if(certInfo == certOrderInfo[manufacturerAddress].certInfo){

            bool res = true;
            if (certOrderInfo[manufacturerAddress].appliedAuditor1 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor1 = msg.sender;
                auditorOffersInfo[manufacturerAddress].offer1 = offer;
            }else if (certOrderInfo[manufacturerAddress].appliedAuditor2 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor2 = msg.sender;
                auditorOffersInfo[manufacturerAddress].offer2 = offer;
            }else if (certOrderInfo[manufacturerAddress].appliedAuditor3 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor3 = msg.sender;
                auditorOffersInfo[manufacturerAddress].offer3 = offer;
            }else if (certOrderInfo[manufacturerAddress].appliedAuditor4 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor4 = msg.sender;
                auditorOffersInfo[manufacturerAddress].offer4 = offer;
            }else if (certOrderInfo[manufacturerAddress].appliedAuditor5 == address(0)){
                certOrderInfo[manufacturerAddress].appliedAuditor5 = msg.sender;
                auditorOffersInfo[manufacturerAddress].offer5 = offer;
            }else{
                res = false;
            }
        }else{
            res = false;
        }

        return res;

    }

    function selectAuditor(address auditorAddress) returns (bool success){
        CertCoin certCoinContract = CertCoin(certCoinContractAddress);
        uint amount;
        if (certOrderInfo[msg.sender].appliedAuditor1 == auditorAddress){
            amount = auditorOffersInfo[msg.sender].offer1;
        }else if (certOrderInfo[msg.sender].appliedAuditor2 == auditorAddress){
            amount = auditorOffersInfo[msg.sender].offer2;
        }else if (certOrderInfo[msg.sender].appliedAuditor3 == auditorAddress){
            amount = auditorOffersInfo[msg.sender].offer3;
        }else if (certOrderInfo[msg.sender].appliedAuditor4 == auditorAddress){
            amount = auditorOffersInfo[msg.sender].offer4;
        }else if (certOrderInfo[msg.sender].appliedAuditor5 == auditorAddress){
            amount = auditorOffersInfo[msg.sender].offer5;
        }
        if(certCoinContract.transferFrom(msg.sender, this, amount)){
            certOrderInfo[msg.sender].selectedAuditor = auditorAddress;
        return true;
        }

    }

    function getAuditorOffers(address manufacturerAddress) constant returns(uint a1, uint a2, uint a3, uint a4, uint a5){
        a1 =auditorOffersInfo[manufacturerAddress].offer1;
        a2 =auditorOffersInfo[manufacturerAddress].offer2;
        a3 =auditorOffersInfo[manufacturerAddress].offer3;
        a4 =auditorOffersInfo[manufacturerAddress].offer4;
        a5 =auditorOffersInfo[manufacturerAddress].offer5;
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
            certOrderInfo[manufacturerAddress].auditorResolution = resolution;
        }

    }

    function getAuditorResolution(address manufacturerAddress) constant returns (bytes32){
        return certOrderInfo[manufacturerAddress].auditorResolution;
    }


}
