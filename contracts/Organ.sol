pragma solidity ^0.4.4;


contract Organ {

    struct organ {
        bytes32 name;
        bytes32 addr;
        bytes32 phoneNumber;
        bytes32 email;
        address nextAddr;
    }

    mapping (address => organ) public organInfo;
    address public headAddr;


    function register(bytes32 name, bytes32 addr, bytes32 phoneNumber, bytes32 email) {

        /* require(organInfo[msg.sender].name == ""); */

        organInfo[msg.sender].name = name;
        organInfo[msg.sender].addr = addr;
        organInfo[msg.sender].phoneNumber = phoneNumber;
        organInfo[msg.sender].email = email;

        organInfo[msg.sender].nextAddr = headAddr;
        headAddr = msg.sender;
    }


    function getByAddress(address organAddress) constant returns (bytes32, bytes32, bytes32, bytes32, address) {
        return (
            organInfo[organAddress].name,
            organInfo[organAddress].addr,
            organInfo[organAddress].phoneNumber,
            organInfo[organAddress].email,
            organInfo[organAddress].nextAddr
        );
    }

    function getHeadAddr() constant returns (address) {
        return headAddr;
    }

}
