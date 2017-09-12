pragma solidity ^0.4.4;

import "../contracts/Auditor.sol";


contract CertOrder {

    address auditorContractAddress;
    address certCoinContractAddress;

    function CertOrder(address certCoinContractAddr, address auditorContractAddr) {
        certCoinContractAddress = certCoinContractAddr;
        auditorContractAddress = auditorContractAddr;
    }

    struct CertOrderInfo {
        address headAuditor;
        mapping (address => AuditorInfo) appliedAuditorsInfo;
        uint appliedAuditors;
        bytes32 certInfo;
        bytes32 secretInformation;
        bytes32 auditorResolution;
        address selectedAuditor;
        address nextCertOrder;
    }

    struct AuditorInfo {
        uint offer;
        address nextAuditor;
    }

    address public headCertOrder;
    mapping (address => CertOrderInfo) public certOrderInfo;

    function register (bytes32 certInfo, bytes32 secretInformation) {
        certOrderInfo[msg.sender].certInfo = certInfo;
        certOrderInfo[msg.sender].secretInformation = secretInformation;
        certOrderInfo[msg.sender].nextCertOrder = headCertOrder;
        headCertOrder = msg.sender;
    }

    function getByAddress(address manufacturer) constant returns (bytes32 certInfo, address nextCertOrder,
                                                                         uint appliedAuditors, address selectedAuditor)
    {
        certInfo = certOrderInfo[manufacturer].certInfo;
        nextCertOrder = certOrderInfo[manufacturer].nextCertOrder;
        appliedAuditors = certOrderInfo[manufacturer].appliedAuditors;
        selectedAuditor = certOrderInfo[manufacturer].selectedAuditor;
    }

    function apply(address manufacturer, uint offer) returns (bool) {
        Auditor auditorContract = Auditor(auditorContractAddress);

        bytes32 name;
        bytes32 education;
        bytes32 certInfo;
        bytes32 phoneNumber;
        bytes32 email;
        address nextAuditorAddress;

        (name, education, certInfo, phoneNumber, email, nextAuditorAddress) = auditorContract.getByAddress(msg.sender);

        bool res = true;
        CertOrderInfo storage currentOrder = certOrderInfo[manufacturer];
        if (certInfo == currentOrder.certInfo) {
            if (currentOrder.appliedAuditorsInfo[msg.sender].offer == 0) {
                currentOrder.appliedAuditorsInfo[msg.sender].offer = offer;
                currentOrder.appliedAuditorsInfo[msg.sender].nextAuditor = currentOrder.headAuditor;
                currentOrder.headAuditor = msg.sender;
            }else {
                res = false;
            }
        }else {
            res = false;
        }
        return res;
    }

    function selectAuditor(address auditor) returns (bool success) {
        CertCoin certCoinContract = CertCoin(certCoinContractAddress);
        uint amount;

        if (certOrderInfo[msg.sender].appliedAuditorsInfo[auditor].offer != 0)
            amount = certOrderInfo[msg.sender].appliedAuditorsInfo[auditor].offer;

        if (certCoinContract.transferFrom(msg.sender, this, amount)) {
            certOrderInfo[msg.sender].selectedAuditor = auditor;
            return true;
        }
        return false;
    }

    function getAuditorOffer(address manufacturer, address auditor) constant returns(uint) {
        return certOrderInfo[manufacturer].appliedAuditorsInfo[auditor].offer;
    }

    function getSelectedAuditor(address manufacturer) constant returns (address) {
        return certOrderInfo[manufacturer].selectedAuditor;
    }

    function getSecretInformation(address manufacturer) constant returns (bytes32) {
        if (msg.sender == manufacturer || certOrderInfo[manufacturer].selectedAuditor == msg.sender) {
            return certOrderInfo[manufacturer].secretInformation;
        }
    }

    function setAuditorResolution(address manufacturer, bytes32 resolution) {
        if (certOrderInfo[manufacturer].selectedAuditor == msg.sender) {
            certOrderInfo[manufacturer].auditorResolution = resolution;
        }
    }

    function getAuditorResolution(address manufacturer) constant returns (bytes32) {
        return certOrderInfo[manufacturer].auditorResolution;
    }
}
