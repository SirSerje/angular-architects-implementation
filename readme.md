# angular-architects react module federation POC

## How to start?

1. node `v20.17.0` (22 works as well, but 20.17 was checked)
2. ensure that ports 4204 and 4250 are free, because app won't use any different
3. `cd shell && npm i && npm run start`
4. in parallel window `cd remote-1 && npm i && npm run start`

## Questions and TODOs

1. Can I share from react mfe e.g. React lib?
2. Can I make React.createElement on angular's side?
3. Add more module federation angular app
4. can I update react to 18+ | use create react app?
