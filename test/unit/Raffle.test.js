const { assert, expect } = require("chai")
const { network, getNamedAccounts, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config.js")
const { assert } = require("ethers")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Raffle Unit Tests", function () {
          let raffle, vrfCoordinatorV2Mock
          beforeEach(async function () {
              const { deployer } = getNamedAccounts()
              await deployments.fixture(["all"])
              raffle = ethers.getContract("Raffle", deployer)
              vrfCoordinatorV2Mock = ethers.getContract("VRFCoordinatorV2Mock", deployer)
          })

          describe("constructor", async function () {
              it("initializes the raffle correctly", async function () {
                  const raffleState = raffle.getRaffleStatus
                  console.log("wwwwww")
                  assert.equal(raffleState, "1")
              })
          })
      })
