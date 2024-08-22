// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract GeometryCalculator {

    function calculateTriangleArea(uint256 base, uint256 height) public pure returns (uint256) {
        require(base > 0 && height > 0, "Base and height must be greater than zero");
        return (base * height) / 2;
    }

    function calculateRectangleArea(uint256 length, uint256 width) public pure returns (uint256) {
        require(length > 0 && width > 0, "Length and width must be greater than zero");
        return length * width;
    }

    function calculateSquareArea(uint256 side) public pure returns (uint256) {
        require(side > 0, "Side must be greater than zero");
        return side * side;
    }
}