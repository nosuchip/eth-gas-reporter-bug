Reproduction of `TypeError: Cannot read property 'gasUsed' of undefined` error

There is only one test `test_warehouse.js` that tests only single empty method "testMethod" or contract "Warehouse".
It looks like existence of another contract that linked to library and perform call from it affects Warehouse contracts
gas calculation. If I comment out contract `NotEventTested` from migration - it works. If I remove library method call
(or move it to contract from library) - it works. But in this configuration - it doesn't.


How to reproduce:
- `npm start`
- `npm test test/test_warehouse.js`
