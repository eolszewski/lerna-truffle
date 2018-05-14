pragma solidity ^0.4.19;

import "contracts-lib/contracts/EventStore.sol";

contract CustomEventStore is EventStore {
    address public owner;

    function () public payable { revert(); }

    constructor() public {
        owner = tx.origin;
    }
}