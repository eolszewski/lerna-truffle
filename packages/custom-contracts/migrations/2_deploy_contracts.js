const EventStoreLib = artifacts.require(
  'contracts-lib/contracts/EventStoreLib.sol'
);
const EventStore = artifacts.require(
  'contracts-lib/contracts/EventStore.sol'
);
const EventStoreFactory = artifacts.require(
  'contracts-lib/contracts/EventStoreFactory.sol'
);

const CustomEventStore = artifacts.require('./CustomEventStore.sol');

module.exports = deployer => {
  deployer.deploy(EventStoreLib);
  deployer.link(EventStoreLib, EventStore);
  deployer.deploy(EventStore);

  deployer.link(EventStoreLib, EventStoreFactory);
  deployer.link(EventStore, EventStoreFactory);
  deployer.deploy(EventStoreFactory);

  deployer.link(EventStoreLib, CustomEventStore);
  deployer.link(EventStore, CustomEventStore);
  deployer.deploy(CustomEventStore);
};
