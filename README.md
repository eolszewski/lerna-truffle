# lerna-truffle
Simple project demonstrating how to use truffle inside of lerna

Lerna is a great resource for managing larger projects that have multiple in-house dependencies that are undergoing development.

In this example, you learn how to leverage lerna with truffle to enable you to easily inherit smart contracts into one package from another.

This setup is very simple - `packages/custom-contracts` inherits smart contracts from `packages/contracts-lib` through the package.json dependency and leverages truffle's `artifacts.require` command to reference the imported smart contracts.