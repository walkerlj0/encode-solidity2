import { expect } from "chai";
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

describe("HelloWorld", function () {
    let helloWorldContract: HelloWorld;

    beforeEach(async function () {
        // https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html#helpers
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        // https://docs.ethers.io/v5/api/contract/contract-factory/#ContractFactory-deploy
        helloWorldContract = await helloWorldFactory.deploy() as HelloWorld;
        // https://docs.ethers.io/v5/api/contract/contract/#Contract-deployed
        await helloWorldContract.deployed();
      });

      it("Should give a Hello World", async function () {
        const helloWorldText = await helloWorldContract.helloWorld();
        expect(helloWorldText).to.equal("Hello World");
      });
});