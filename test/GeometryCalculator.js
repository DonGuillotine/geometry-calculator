const { expect } = require("chai");

describe("GeometryCalculator", function () {
  let geometryCalculator;

  beforeEach(async function () {
    const GeometryCalculator = await ethers.getContractFactory("GeometryCalculator");
    geometryCalculator = await GeometryCalculator.deploy();
  });

  describe("Triangle Area", function () {
    it("should calculate the area of a triangle correctly", async function () {
      const area = await geometryCalculator.calculateTriangleArea(5, 4);
      expect(area).to.equal(10);
    });

    it("should revert if base or height is zero", async function () {
      await expect(geometryCalculator.calculateTriangleArea(0, 4)).to.be.revertedWith(
        "Base and height must be greater than zero"
      );
    });
  });

  describe("Rectangle Area", function () {
    it("should calculate the area of a rectangle correctly", async function () {
      const area = await geometryCalculator.calculateRectangleArea(5, 4);
      expect(area).to.equal(20);
    });

    it("should revert if length or width is zero", async function () {
      await expect(geometryCalculator.calculateRectangleArea(0, 4)).to.be.revertedWith(
        "Length and width must be greater than zero"
      );
    });
  });

  describe("Square Area", function () {
    it("should calculate the area of a square correctly", async function () {
      const area = await geometryCalculator.calculateSquareArea(5);
      expect(area).to.equal(25);
    });

    it("should revert if side is zero", async function () {
      await expect(geometryCalculator.calculateSquareArea(0)).to.be.revertedWith(
        "Side must be greater than zero"
      );
    });
  });
});