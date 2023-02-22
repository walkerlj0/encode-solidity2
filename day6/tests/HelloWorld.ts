import { expect } from "chai";
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

describe("HelloWorld", function () {
    let helloWorldContract: HelloWorld;

    beforeEach(async function () {
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        helloWorldContract = await helloWorldFactory.deploy() as HelloWorld;
        await helloWorldContract.deployed();
      });

      it("Should give a Hello World", async function () {
        const helloWorldText = await helloWorldContract.helloWorld();
        expect(helloWorldText).to.equal("Hello World");
      });
});