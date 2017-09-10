# Certchain
### Blockchain Certification Network (BCN)

## Usage

1) setup http://truffleframework.com
2) setup and run testrpc
3) truffle migrate
4) npm run start
5) spread tokens
open truffle console and run:

CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[1], 12e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[2], 13e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[3], 15e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[4], 23e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[5], 14e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[6], 11e8, { from: web3.eth.accounts[0]}));


## Draft

### Smart contracts

* `Auditor` - auditor (a person who performs audit)
* `Manufacturer` - manufacturer, which needs a certificate for it's product
* `Organ` - certification organisation, which provides certificates to manufacturers after successful audit

* `CertOrder` - smart contract which provides business logic for certification processes

* `CertCoin` - ERC20 token `CRT`

### Economics/Financial

* To register in the Blockchain Certification Network (Certchain.io) any role must buy few `CertCoin`'s to deposit them to activate it's account and participate in certification processes
* Certification comission
* Others..