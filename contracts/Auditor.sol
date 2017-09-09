pragma solidity ^0.4.4;


contract Auditor {

    struct auditor {
        bytes32 Name;
        bytes32 Education;
        bytes32 CertInfo;
        bytes32 PhoneNumber;
        bytes32 Email;
        address nextAddr;
    }

    mapping (address => auditor) public auditorInfo;
    address public headAddr;


    function register(bytes32 name, bytes32 education, bytes32 certInfo, bytes32 phoneNumber, bytes32 email) {

        auditorInfo[msg.sender].Name = name;
        auditorInfo[msg.sender].Education = education;
        auditorInfo[msg.sender].CertInfo = certInfo;
        auditorInfo[msg.sender].PhoneNumber = phoneNumber;
        auditorInfo[msg.sender].Email = email;

        auditorInfo[msg.sender].nextAddr = headAddr;
        headAddr = msg.sender;
    }


    function getByAddress(address auditorAddress) constant returns (bytes32, bytes32, bytes32, bytes32, bytes32, address){
        return (auditorInfo[auditorAddress].Name, auditorInfo[auditorAddress].Education,
        auditorInfo[auditorAddress].CertInfo, auditorInfo[auditorAddress].PhoneNumber, auditorInfo[auditorAddress].Email, auditorInfo[auditorAddress].nextAddr);
    }

    function getHeadAddr() constant returns (address) {
        return headAddr;
    }

}
