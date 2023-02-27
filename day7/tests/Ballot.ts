import { expect } from "chai";
import { ethers } from "hardhat";
import { Ballot } from "../typechain-types";

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
        await ballotContract.deployTransaction.wait();
    });
    
    describe ("When the contract is deployed", function () {
        it ("Has the provided proposals", async function () {
            for (let index = 0; index < PROPOSALS.length; index++){
                const proposal = await ballotContract.proposals(index);
                expect(ethers.utils.parseBytes32String(proposal.name)).to.eq(
                    PROPOSALS[index]);  
            }
        });
        it ("sets depolyer address as chairperson", async function () {
            const signers = await ethers.getSigners();
            const deployer = signers[0].address;
            const chairperson = await ballotContract.chairperson();
            expect(chairperson).to.eq(deployer);
        });
        it ("has zero votes for all proposals", async function () {
            for (let index = 0; index < PROPOSALS.length; index++){
                const proposal = await ballotContract.proposals(index);
                expect(proposal.voteCount).to.eq(0);  
            }
        });
        it ("sets voting weight for chairperson as 1", async function () {
            const chairperson = await ballotContract.chairperson();
            const chairpersonVoter = await ballotContract.voters(chairperson);
            const votingWeight = chairpersonVoter.weight;
            expect(votingWeight).to.eq(1);
        });
     });
});