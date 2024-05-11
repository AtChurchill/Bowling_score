# Bowling katas

### Objective

Code that calculates score of any bowling game. Based on https://www.wikihow.com/Score-Bowling.

### How to use

We use `yarn` which is a simple is a package manager. To install it visit https://classic.yarnpkg.com/lang/en/docs/install

### Getting started

1. Run `yarn install`
2. [if available] Rename `.env.template` into `.env` and add your own configuration variable

### Running tests

Run `yarn test v<x> [game name]`

Where `<x>` will be replaced by the version number (e.g. `v1`) and `game name` the name of any test game data found in `./src/__tests__/testGame.data.ts`, for example `yarn test v1 "simple game"`

### To add a new implementation

1. Create a new folder corresponding to the version number (e.g. `v3`) and associated files inside it
2. Add a new entry in `./src/index.ts` pointing to the score function

### Sample debugging configuration

There isn't only one way to do it and you can find more details [in Visual Code doc](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

One option would be to open the `Run and Debug` pane and select the option to create a `launch.json` file and replace its content by the below

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Simple game",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "outputCapture": "std",
      "runtimeExecutable": "yarn",
      "runtimeArgs": ["test", "v1_correction", "simple game"],
      "env": {}
    }
  ]
}
```
