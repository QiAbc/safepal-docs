# Tron


[Tronlink dapp](https://developers.tron.network/docs/tronlink-integration).


## Installed or not

```js
const isSafePalInstalled = window.SafePalHook && window.tronWeb;
```

## eth_requestAccounts(request authorization to connect)

```js
try {
  await SafePalHook.request({ method: 'tron_requestAccounts' });
  const address = SafePalHook.defaultAddress.base58;
  const balance = await tronWeb.trx.getBalance(address);
} catch {}
```

## connected

```js
  window.tronWeb.ready;
```

## sendTransaction

SafePal wallet currently only supports the TriggerSmartContract method, please refer to:[https://developers.tron.network/docs/tronlink-integration](https://developers.tron.network/docs/tronlink-integration)