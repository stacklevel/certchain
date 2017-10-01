pragma solidity ^0.4.4;

import "../contracts/CertCoin.sol";


contract Manufacturer {
    struct ManufacturerInfo {
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

    mapping (address => ManufacturerInfo) public manufacturerInfo;
    address public headAddr;
    address certCoinContractAddress;

    function Manufacturer(address certCoinAddr) {
        certCoinContractAddress = certCoinAddr;
    }

    uint registrationHold = 1000000000;

    function register (
        bytes32 name,
        bytes32 scope,
        bytes32 productsAndServices,
        bytes32 legalAddress,
        bytes32 bankName,
        bytes32 uniqNumber,
        bytes32 phoneNumber,
        bytes32 email) returns (bool success)
    {
        CertCoin certCoinContract = CertCoin(certCoinContractAddress);
        if (manufacturerInfo[msg.sender].name == "" && certCoinContract.transferFrom(msg.sender, this, registrationHold)) {
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
            return true;
        }
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
}
