pragma solidity ^0.4.4;


contract Manufacturer {

    struct manufacturer {
        bytes32 name;
        bytes32 scope;
        bytes32 productsAndServices;
        bytes32 legalAddress;
        bytes32 bankName;
        bytes32 uniqNumber;
        bytes32 phoneNumber;
        bytes32 email;
        address nextAddr;
    }

    mapping (address => manufacturer) public manufacturerInfo;
    address public headAddr;

    event LogManufactureRegistered(address accountAddress, bytes32 name, bytes32 scope,
        bytes32 productsAndServices, bytes32 legalAddress, bytes32 bankName,
        bytes32 uniqNumber, bytes32 phoneNumber, bytes32 email);

    function register (bytes32 name, bytes32 scope, bytes32 productsAndServices, bytes32 legalAddress, bytes32 bankName, bytes32 uniqNumber, bytes32 phoneNumber, bytes32 email) {
        manufacturerInfo[msg.sender].name = name;
        manufacturerInfo[msg.sender].scope = scope;
        manufacturerInfo[msg.sender].productsAndServices = productsAndServices;
        manufacturerInfo[msg.sender].legalAddress = legalAddress;
        manufacturerInfo[msg.sender].bankName = bankName;
        manufacturerInfo[msg.sender].uniqNumber = uniqNumber;
        manufacturerInfo[msg.sender].phoneNumber = phoneNumber;
        manufacturerInfo[msg.sender].email = email;
        manufacturerInfo[msg.sender].nextAddr = headAddr;
        headAddr = msg.sender;
        LogManufactureRegistered(msg.sender, name, scope, productsAndServices, legalAddress, bankName, uniqNumber, phoneNumber, email);
    }

    function getByAddress(address manufacturerAddress) constant returns (bytes32 name, bytes32 scope, bytes32 productsAndServices, bytes32 legalAddress, bytes32 bankName, bytes32 uniqNumber, bytes32 phoneNumber, bytes32 email, address nextAddr) {
        name = manufacturerInfo[manufacturerAddress].name;
        scope = manufacturerInfo[manufacturerAddress].scope;
        productsAndServices = manufacturerInfo[manufacturerAddress].productsAndServices;
        legalAddress = manufacturerInfo[manufacturerAddress].legalAddress;
        bankName = manufacturerInfo[manufacturerAddress].bankName;
        uniqNumber = manufacturerInfo[manufacturerAddress].uniqNumber;
        phoneNumber = manufacturerInfo[manufacturerAddress].phoneNumber;
        email = manufacturerInfo[manufacturerAddress].email;
        nextAddr = manufacturerInfo[manufacturerAddress].nextAddr;
    }

    function getHeadAddr() constant returns (address) {
        return headAddr;
    }

}
