import { expect } from "chai";
import { ethers } from "hardhat";
import {BigNumber} from "ethers";

describe("MyCoin", function () {
  it("Should return the new greeting once it's changed", async function () {
    const MyCoin = await ethers.getContractFactory("MyCoin");
    const myCoin = await MyCoin.deploy();
    await myCoin.deployed();

    expect(await myCoin.name()).to.equal("WooCoin");


    const [owner, addr1] = await ethers.getSigners();
    const txn = await myCoin.transfer(addr1.address,10000);

    // wait until the transaction is mined
    await txn.wait();
    let balance=await myCoin.balanceOf(addr1.address)
    console.log(balance)
    expect(balance).to.equal(BigNumber.from(10000));
  });
});
