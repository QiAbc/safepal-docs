# Ton

To use SafePal Wallet with your dApp, your users must first install the SafePal Wallet Chrome extension in their browser. 

## npm package
  - [@tonconnect/ui-react](https://www.npmjs.com/package/@tonconnect/ui-react) 
  - [@tonconnect/ui](https://www.npmjs.com/package/@tonconnect/ui) 


## Detecting the Ton provider

If SafePal Wallet is not installed, you can prompt the user to first install SafePal Wallet and provide the below installation instructions. For example, see below:

```js
function getTonWallet() {
  const provider = window.safepalTonProvider;
  if (!provider) {
    return window.open('https://www.safepal.com/download?product=2');
    throw  `Please guide users to download from our official website`
  }
  return provider;
}
```
## TON Connect React

- [@tonconnect/ui-react](https://www.npmjs.com/package/@tonconnect/ui-react) - TON Connect User Interface (UI) for React applications

TonConnect UI React is a React UI kit for TonConnect SDK. Use it to connect your app to TON wallets via TonConnect protocol in React apps.

* Example of a DAppwith `@tonconnect/ui-react`: [GitHub](https://github.com/ton-connect/demo-dapp-with-react-ui)
* Example of deployed `demo-dapp-with-react-ui`: [GitHub](https://ton-connect.github.io/demo-dapp-with-react-ui/)

```bash
npm i @tonconnect/ui-react
```

- [GitHub](https://github.com/ton-connect/sdk/tree/main/packages/ui-react)
- [NPM](https://www.npmjs.com/package/@tonconnect/ui-react)
- [API Documentation](https://ton-connect.github.io/sdk/modules/_tonconnect_ui_react.html)

### TON Connect UI

TonConnect UI is a UI kit for TonConnect SDK. Use it to connect your app to TON wallets via TonConnect protocol. It allows you to integrate TonConnect to your app easier using our UI elements such as "connect wallet button", "select wallet dialog" and confirmation modals.

```bash
npm i @tonconnect/ui
```

- [GitHub](https://github.com/ton-connect/sdk/tree/main/packages/ui)
- [NPM](https://www.npmjs.com/package/@tonconnect/ui)
- [API Documentation](https://ton-connect.github.io/sdk/modules/_tonconnect_ui.html)

The TON Connect User Interface (UI) is a framework that allows developers to improve the user experience (UX) for application users.

TON Connect can easily be integrated with apps using simple UI elements such as the "connect wallet button", "select wallet dialog" and confirmation modals. Here are three main examples of how TON Connect improves UX in apps:

* Example of app functionality in the DAppbrowser: [GitHub](https://ton-connect.github.io/demo-dapp/)
* Example of a backend partition of the DAppabove: [GitHub](https://github.com/ton-connect/demo-dapp-backend)
* Bridge server using Go: [GitHub](https://github.com/ton-connect/bridge)


This kit will simplify the implementation of TON Connect in apps built for TON Blockchain. Standard frontend frameworks are supported, as well as applications that don’t use predetermined frameworks.


### TON Connect SDK

The most low-level of the three frameworks that helps developers integrate TON Connect into their applications is the TON Connect SDK. It is primarily used to connect apps to TON Wallets via the TON Connect protocol.

- [GitHub](https://github.com/ton-connect/sdk/tree/main/packages/sdk)
- [NPM](https://www.npmjs.com/package/@tonconnect/sdk)
