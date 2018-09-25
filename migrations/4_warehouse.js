const Warehouse = artifacts.require('./Warehouse');

module.exports = async deployer => {
  await deployer.deploy(Warehouse);
};
