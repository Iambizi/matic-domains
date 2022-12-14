const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("knight");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
    // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of ninjas lol
    let bal = await domainContract.price("omniMon");
    let txn = await domainContract.register("omniMon",  {
      value: hre.ethers.utils.parseEther("0.1")
    });
    await txn.wait();
    console.log("Minted domain omniMon.Knight");
  
    txn = await domainContract.setRecord("Kinght", "Am I omniMon or am I omniMon of the 13 Knights ?? ");
    await txn.wait();
    console.log("Set record for omniMon.ninja");
  
    const address = await domainContract.getAddress("omniMon");
    console.log("Owner of domain omniMon:", address);
  
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