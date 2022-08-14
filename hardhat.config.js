
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
// require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: `${process.env.ALCHEMY_MUMBAI_URL}`,
      accounts: `0x${process.env.PRIVATE_KEY} `,
    }
  }
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
