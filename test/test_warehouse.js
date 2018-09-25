const Web3 = require('web3');

const web3 = new Web3();
const Warehouse = artifacts.require('./Warehouse.sol');

contract('Warehouse Contract', async accounts => {
  let warehouse;

  beforeEach(async () => {
    warehouse = await Warehouse.new();
    web3.setProvider(Warehouse.web3.currentProvider);
  });

  it('should be able to call test method', async () => {
    const tx = await warehouse.testMethod();
  });
});
