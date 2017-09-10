pragma solidity ^0.4.4;

import "./CertCoin.sol";

contract Auditor {
    struct auditor {
        bytes32 name;
        bytes32 education;
        bytes32 certInfo;
        bytes32 phoneNumber;
        bytes32 email;
        address nextAddr;
    }

    address certCoinContractAddress;

    mapping (address => auditor) public auditorInfo;
    address public headAddr;

    function Auditor(address certCoinAddr) {
        certCoinContractAddress = certCoinAddr;
    }

    function register(bytes32 name, bytes32 education, bytes32 certInfo, bytes32 phoneNumber, bytes32 email) returns (bool success) {
        CertCoin certCoinContract = CertCoin(certCoinContractAddress);

//        require(auditorInfo[msg.sender].name == "");

        if (certCoinContract.transferFrom(msg.sender, this, 10)){
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

    function getHeadAddr() constant returns (address) {
        return headAddr;
    }

}
