# mycoin-contract



## How To Run This Project

### Installation
```shell
yarn install
```

### Compile Smart Contract
```shell
npx hardhat compile
```

### Test Smart Contract
```shell
npx hardhat test
```

### Deploy Smart Contract(local)
```shell
npx hardhat node //啟動本地測試鏈
npx hardhat run scripts/mycoin.deploy.ts --network localhost 
```

### Other
```shell
npx hardhat accounts
npx hardhat clean
npx hardhat help
```
