
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
// require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10" ,
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/idy6WB75Zj_7g6I-PabU0usFeJLk1n54`,
      accounts: [`1d462c264ecc698557168a67bcf22dc209773d861ddf61d1be2e0e2732d4373e`],
    }
  }
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
