var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Projects  = artifacts.require("./Projects");
var Voting  = artifacts.require("./Voting");
var Adoption = artifacts.require("./Adoption.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(Projects);
  deployer.deploy(Voting);
  deployer.deploy(Adoption);
};
