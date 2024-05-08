# Bowling katas

### Objective

Code that calculates score of any bowling game. Based on https://www.wikihow.com/Score-Bowling.

### How to use

We use `yarn` which is a simple is a package manager. To install it visit https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable.

### Getting started

1. Run `yarn install`
2. [if available] Rename `.env.template` into `.env` and add your own configuration variable

### Running tests

Run `yarn test v<x> [game name]`

Where `<x>` will be replaced by the version number (e.g. `v1`) and `game name` the name of any test game data found in ./src/**tests**/testGame.data.ts

### To add a new implementation

1. Create a new folder corresponding to the version number (e.g. `v3`) and associated files inside it
2. Add a new entry in `./src/index.ts` pointing to the score function
