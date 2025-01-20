# Web3.js Plugin for Wallet RPC methods

#### Web3.js libraries are being sunset on March 4th, 2025. For migration guides and more details please refer to [Chainsafe blog](https://blog.chainsafe.io/web3-js-sunset/)

This Web3.js plugin adds support for the following wallet-related RPC methods:

- [wallet_addEthereumChain (EIP-3085)](https://eips.ethereum.org/EIPS/eip-3085)
- [wallet_switchEthereumChain (EIP-3326)](https://eips.ethereum.org/EIPS/eip-3326)
- [wallet_watchAsset (EIP-747)](https://eips.ethereum.org/EIPS/eip-747)
- [wallet_requestPermissions (EIP-2255)](https://eips.ethereum.org/EIPS/eip-2255)
- [wallet_getPermissions (EIP-2255)](https://eips.ethereum.org/EIPS/eip-2255)
- [wallet_revokePermissions](https://docs.metamask.io/wallet/reference/json-rpc-methods/wallet_revokepermissions/)

Keep reading for more information, or refer to the comprehensive [API documentation](https://web3.github.io/web3-plugin-wallet-rpc/).

## Installation

Use your preferred package manager. Ensure that `web3` is also installed and integrated into your project.

```bash
npm install web3-plugin-wallet-rpc
```

```bash
yarn add web3-plugin-wallet-rpc
```

```bash
pnpm add web3-plugin-wallet-rpc
```

## Usage

### Register plugin

```typescript
import { Web3 } from 'web3';
import { WalletRpcPlugin } from 'web3-plugin-wallet-rpc';

const web3 = new Web3('https://eth.llamarpc.com');
web3.registerPlugin(new WalletRpcPlugin());
```

### Methods

Click on the method name for detailed documentation.

#### [addEthereumChain](https://web3.github.io/web3-plugin-wallet-rpc/classes/WalletRpcPlugin.html#addEthereumChain)

Invokes the `wallet_addEthereumChain` method as defined in [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085#wallet_addethereumchain).

```typescript
await web3.walletRpc.addEthereumChain({
  chainId: 5000,
  blockExplorerUrls: ['https://mantlescan.xyz'],
  chainName: 'Mantle',
  iconUrls: ['https://icons.llamao.fi/icons/chains/rsz_mantle.jpg'],
  nativeCurrency: {
    name: 'Mantle',
    symbol: 'MNT',
    decimals: 18,
  },
  rpcUrls: ['https://rpc.mantle.xyz'],
});
```

#### [switchEthereumChain](https://web3.github.io/web3-plugin-wallet-rpc/classes/WalletRpcPlugin.html#switchEthereumChain)

Invokes the `wallet_switchEthereumChain` method as defined in [EIP-3326](https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain).

```typescript
await web3.walletRpc.switchEthereumChain(5000);
```

#### [watchAsset](https://web3.github.io/web3-plugin-wallet-rpc/classes/WalletRpcPlugin.html#watchAsset)

Invokes the `wallet_watchAsset` method as defined in [EIP-747](https://eips.ethereum.org/EIPS/eip-747#specification).

```typescript
await web3.walletRpc.watchAsset({
  type: 'ERC20',
  options: {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
  },
});
```

#### [requestPermissions](https://web3.github.io/web3-plugin-wallet-rpc/classes/WalletRpcPlugin.html#requestPermissions)

Invokes the `wallet_requestPermissions` method as defined in [EIP-2255](https://eips.ethereum.org/EIPS/eip-2255#specification).

```typescript
const permissions = await web3.walletRpc.requestPermissions({
  eth_accounts: {},
});
```

#### [getPermissions](https://web3.github.io/web3-plugin-wallet-rpc/classes/WalletRpcPlugin.html#getPermissions)

Invokes the `wallet_getPermissions` method as defined in [EIP-2255](https://eips.ethereum.org/EIPS/eip-2255#specification).

```typescript
const permissions = await web3.walletRpc.getPermissions();
```

#### [revokePermissions](https://web3.github.io/web3-plugin-wallet-rpc/classes/WalletRpcPlugin.html#revokePermissions)

Invokes the `wallet_revokePermissions` method as defined in [MetaMask docs](https://docs.metamask.io/wallet/reference/json-rpc-methods/wallet_revokepermissions/).

```typescript
const permissions = await web3.walletRpc.revokePermissions({
  eth_accounts: {},
});
```

## Contributing

We welcome pull requests! For major changes, please [open an issue](https://github.com/web3/web3-plugin-wallet-rpc) first to discuss the proposed modifications.
Also, ensure that you update tests as needed to reflect the changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
