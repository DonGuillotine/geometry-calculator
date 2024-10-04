# GeometryCalculator Smart Contract

This project is a Solidity smart contract for calculating the area of triangles, rectangles, and squares. The contract is designed to run on the Ethereum blockchain and has been deployed on the Lisk Sepolia testnet.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Deployment](#deployment)
- [Testing](#testing)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The `GeometryCalculator` contract provides functions to calculate the area of three basic shapes:
- **Triangle**: Calculates the area given the base and height.
- **Rectangle**: Calculates the area given the length and width.
- **Square**: Calculates the area given the length of one side.

This project uses the Solidity programming language and is developed using the Hardhat framework. The contract has been deployed to the Lisk Sepolia testnet using Alchemy.

## Features

- **Triangle Area Calculation**: Given a base and a height, the contract calculates the area of a triangle.
- **Rectangle Area Calculation**: Given the length and width, the contract calculates the area of a rectangle.
- **Square Area Calculation**: Given the length of one side, the contract calculates the area of a square.
- **Error Handling**: Ensures that the input values are greater than zero.

## Prerequisites

To work with this project, you need to have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- [Alchemy](https://www.alchemy.com/)
- [MetaMask](https://metamask.io/) (for deploying to testnets)

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DonGuillotine/geometry-calculator.git
   cd geometry-calculator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.

## Deployment

To deploy the contract to the Lisk Sepolia testnet:

1. **Compile the contract**:
   ```bash
   npx hardhat compile
   ```

2. **Deploy the contract**:
   ```bash
   npx hardhat run scripts/deploy.js --network lisk-sepolia
   ```

3. After deployment, the contract address will be displayed in the console.

## Testing

To run tests for the contract:

1. **Run the tests**:
   ```bash
   npx hardhat test
   ```

2. Review the output to ensure all tests pass.

## Usage

You can interact with the deployed contract using the Hardhat console, Remix IDE, or by building a front-end dApp.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
