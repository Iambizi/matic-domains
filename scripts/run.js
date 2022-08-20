// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory('Domains');
  // We pass in "ninja" to the constructor when deploying
  const domainContract = await domainContractFactory.deploy("vibes");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  // We're passing in a second variable - value. This is the moneyyyyyyyyyy
  let txn = await domainContract.register("OmniMon",  {value: hre.ethers.utils.parseEther('0.2')});
  await txn.wait();

  const address = await domainContract.getAddress("OmniMon");
  console.log("Owner of domain OmniMon:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();