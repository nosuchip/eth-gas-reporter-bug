const MyLib = artifacts.require('./libs/MyLib');
const Warehouse = artifacts.require('./Warehouse');
const NotEventTested = artifacts.require('./NotEventTested');

module.exports = async deployer => {
  await deployer.deploy(MyLib);
  await deployer.link(MyLib, [Warehouse, NotEventTested]);
};
