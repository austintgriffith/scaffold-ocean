pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract Time {


  function currentTime() public view returns (uint256) {
    return block.timestamp;
  }

  function getBlockNum() public view returns (uint256) {
    return block.number;
  }

  constructor() {
    // what should we do on deploy?
  }

}
