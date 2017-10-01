pragma solidity ^0.4.4;

import "../contracts/CertCoin.sol";


contract Auditor {
    struct AuditorInfo {
        bytes32 name;
        bytes32 education;
        bytes32 certInfo;
        bytes32 phoneNumber;
        bytes32 email;
        address nextAddr;
    }

    mapping (address => AuditorInfo) public auditorInfo;
    address public headAddr;
    address certCoinContractAddress;

    uint registrationHold = 1000000000;
    function Auditor(address certCoinAddr) {
        certCoinContractAddress = certCoinAddr;
    }

    function register(
        bytes32 name,
        bytes32 education,
        bytes32 certInfo,
        bytes32 phoneNumber,
        bytes32 email) returns (bool success)
        {
        CertCoin certCoinContract = CertCoin(certCoinContractAddress);

        if (auditorInfo[msg.sender].name == "" && certCoinContract.transferFrom(msg.sender, this, registrationHold)) {
            auditorInfo[msg.sender].name = name;
            auditorInfo[msg.sender].education = education;
            auditorInfo[msg.sender].certInfo = certInfo;
            auditorInfo[msg.sender].phoneNumber = phoneNumber;
            auditorInfo[msg.sender].email = email;
            auditorInfo[msg.sender].nextAddr = headAddr;
            headAddr = msg.sender;
            return true;
        }
    }

    function getByAddress(address auditorAddress) constant returns (bytes32, bytes32, bytes32, bytes32, bytes32, address) {
        return (
            auditorInfo[auditorAddress].name,
            auditorInfo[auditorAddress].education,
            auditorInfo[auditorAddress].certInfo,
            auditorInfo[auditorAddress].phoneNumber,
            auditorInfo[auditorAddress].email,
            auditorInfo[auditorAddress].nextAddr
        );
    }
}
