const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("ERC721 Upgradeable", () => {
    it("Should deploy an ERC721 with upgradeable functionality", async () => {
        const NFT = await ethers.getContractFactory("NFT");
        const NFT1 = await ethers.getContractFactory("NFT1");

        let proxy = await hre.upgrades.deployProxy(NFT, {
            kind: "uups",
        });
        const [owner] = await ethers.getSigners();
        const ownerOfToken1 = await proxy.ownerOf(1);

        expect(ownerOfToken1).to.equal(owner.address);

        proxy = await hre.upgrades.upgradeProxy(proxy, NFT1);
        expect(await proxy.test()).to.equal("Upgraded");
    });
});