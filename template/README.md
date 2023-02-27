# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# Set up a Hardhat Project
In order to set up hardhat project you may have cloned, you will first have to run the command `yarn install`, then you can try building it with `yarn hardhat init`

# Set the npm version with nvm
List versions with `nvm ls-remote`
Example version `v18.14.2`
Update version with `nvm install v18.14.2`
`nvm alias default 18`
`npm install npm --global # Upgrade npm to the latest version`

Setting the default node version: https://hardhat.org/tutorial/setting-up-the-environment#macos

## Cleaning Template Files
```
rm .\contracts\*
rm .\scripts\*
rm .\tests\*
yarn hardhat clean
```

## Running your tests
```
 yarn hardhat compile 
 yarn hardhat test 
 ```

## Creating a new peoject from template:


### Option 1 - Copy-Pasta
* Copy all Files (not directories) and the .yarn directory fromthe template, and paste it in a new project

You should have the files in you project: 

```
contracts
scripts
tests

.editorconfig
.env
.gitattributes
.gitignore
.yarn
.yarnrc.yml
README.md
assets
cache
hardhat.config.ts
package.json

tsconfig.json
yarn.lock
```
* Create folders for project files
```
mkdir contracts
mkdir tests
mkdir scripts
```

* Now, to make it a project run the command `yarn install`

This should generate a node_modules folder.

### Option 2 - Start a new project from scratch
```
yarn install
yarn init -2
    ...
yarn config set nodeLinker node-modules
yarn add hardhat --dev
rm .\README.md
yarn hardhat init
    "Create a TypeScript project"
    ...
    .gitignore? Y
yarn add --dev [list of suggested dev dependencies above]
yarn add mocha --dev
```
### Environment setup

Suggested renaming:

    // Renaming "test" folder
    mv test tests

_.mocharc.json_ file:

    {
      "require": "hardhat/register",
      "timeout": 40000,
      "_": ["tests/**/*.ts"]
    }

_hardhat.config.ts_ file:

    {
    const config: HardhatUserConfig = {
    ...
      paths: { tests: "tests" },
    ...
      }
    }

_tsconfig.json_ file:

    ...
      "include": ["./scripts", "./tests", "./typechain-types"],
      "files": ["./hardhat.config.ts"],
    ...

Create env file in root project folder:

_.env_ file:

    MNEMONIC="here is where your twelve words mnemonic should be put my friend"
    PRIVATE_KEY="<your private key here if you don't have a mnemonic seed>"
    INFURA_API_KEY="********************************"
    INFURA_API_SECRET="********************************"
    ALCHEMY_API_KEY="********************************"
    ETHERSCAN_API_KEY="********************************"

Edit the environment with your keys:

    code .env

Test it out:

     yarn hardhat compile 
     yarn hardhat test 




