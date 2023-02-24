import { ethers } from "hardhat";
import { Ballot } from "../typechain-types/Ballot";

const PROPOSALS = ["Alice", "Bob", "Chuck"];

function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let index = 0; index < array.length; index++) {
      bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
    }
    return bytes32Array;
  }
describe ("Ballot", function () {
    let ballotContract: Ballot;

    this.beforeEach(async function () {
        const ballotContractFactory = await ethers.getContractFactory("Ballot");
        ballotContract = await ballotContractFactory.deploy(
            convertStringArrayToBytes32(PROPOSALS)
            );
        console.log("heyooo");
        // await ballotContract.deployTransaction.wait();∏
    });
    describe ("When the contract is deployed", function () {
    });
    describe ("Has the provided proposals", function () {
    });
    describe ("sets depolyer address as chairperson", function () {
    });
});