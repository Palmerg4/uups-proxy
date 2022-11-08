//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./NFT.sol";

contract NFT1 is NFT {
    function test() pure public returns(string memory) {
        return "Upgraded";
    }
}