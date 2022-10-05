module.exports = {
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
    development: {
      host: "localhost", //our network is running on localhost
      port: 8545, // port where your blockchain is running
      network_id: "*",
      from: "0xb7143242e418390e9301bf2349d9d39291ab40b4", // use the account-id generated during the setup process
      gas: 20000000
    }
  }
};