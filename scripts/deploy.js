async function main() {
    const GeometryCalculator = await ethers.getContractFactory("GeometryCalculator");
    
    console.log("Deploying GeometryCalculator...");
    const geometryCalculator = await GeometryCalculator.deploy();
    

    await geometryCalculator.waitForDeployment();
  
    console.log("GeometryCalculator deployed to:", await geometryCalculator.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });