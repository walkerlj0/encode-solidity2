import { expect } from "chai";
import { ethers } from "hardhat";
import { Ballot } from "../typechain-types/Ballot";

describe ("Ballot", function () {
    let ballotContract: Ballot;

    this.beforeEach(async function() {
        const ballotContractFactory = await ethers.getContractFactory("Ballot"),
        ballotContract = await ballotContractFactory.deploy(
            convertStringArrayToBytes32(PROPOSALS)
        );
        await ballotContract.deployTransaction.wait();
    });

    describe ("When the contract is deployed", function() {});
    describe ("When the contract is deployed", function() {
        it("has the provided proposals", async function () {
            for (let index = 0; index <proposals.length; intex ++) {
            const proposals = await ballotContract.proposals();
             expect(ethers.utils.parseBytes32String(proposal.name)).to.eq(PROPOSALS[index]);
            }
        });
        it("sets the deployer address as chairperson", async function() {
            const signers = await ethers.getSigners();
            // const deployer = signers.[0].address;
            const chairperson =  await ballotContract.chairperson();

        })
        it("has zero votes for all proposals", async function() {
            for (let index = 0; index <proposals.length; intex ++) {
                const proposal = await ballotContract.proposals();
                    expect(proposal.voteCount).to.eq(0);
                }
        });
        it("sets the voting weight for the chairperson as 1", async function() {
            const chairperson = await ballotContract.chairperson();
            const votingWeight = await ballotContract.voters();
        });
    });
});