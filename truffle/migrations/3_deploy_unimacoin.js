var unimacoin = artifacts.require("./UniMaCoin.sol");
module.exports = function (deployer) {
    deployer.deploy(unimacoin, "1000000");
};