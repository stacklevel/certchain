# certchain

HOW TO RUN

1) setup http://truffleframework.com
2) setup and run testrpc
3) run truffle migrate
4) npm run start
5) spread tokens
open truffle console and run:
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[1], 12e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[2], 13e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[3], 15e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[4], 23e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[5], 14e8, { from: web3.eth.accounts[0]}));
CertCoin.deployed().then(i => i.transfer(web3.eth.accounts[6], 11e8, { from: web3.eth.accounts[0]}));

  
