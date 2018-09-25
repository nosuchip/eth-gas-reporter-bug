module.exports = {
  networks: {
    local: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 6700000,
      gasPrice: 20000000000,  // 20 GWei
      from: '0x15acda8f23ade92efc000c2d142786ff1bea2ad3',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      currency: 'USD',
      gasPrice: 10
    }
  }
};
