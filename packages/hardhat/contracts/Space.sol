pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract Space is Ownable {


  function currentTime() public view returns (uint256) {
    return block.timestamp;
  }

  constructor() {
    // what should we do on deploy?
  }

  struct Actor {
    uint16 x;
    uint16 y;
    uint8 dx;
    uint8 dy;
    uint208 timestamp;
  }
  Actor[] public actors;

  function currentLocation(uint256 id) public view returns (uint16[2] memory) {
    uint208 timePassed = uint208(block.timestamp) - actors[id].timestamp;
    unchecked {
      uint16 currentX = uint16(uint208(actors[id].x) - uint208(timePassed * actors[id].dx));
      uint16 currentY = uint16(uint208(actors[id].y) - uint208(timePassed * actors[id].dy)); 
      return [currentX,currentY];
    }
  }

  function currentCount() public view returns (uint256) {
    return actors.length;
  }

  function launch(uint16 x, uint16 y, uint8 dx, uint8 dy) public onlyOwner returns (uint256) {
    actors.push(Actor({
      x: x,
      y: y,
      dx: dx,
      dy: dy,
      timestamp: uint208(block.timestamp)
    }));
    return actors.length-1;
  }

}
