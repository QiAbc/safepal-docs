# MultiversX

 **This feature is supported by the following versions of SafePal Wallet.**
 
| platform           | version    | description     |
| ------------------ | ---------- | ----------------|
| App(iOS)           | >=4.7.2    |  Mainnet |
| App(Android)       | >=4.7.2    |  Mainnet |

## Methods


### connect

```typescript
window.postMessage({
                  target: "erdw-inpage",
                  type: "connect",
                  data: data,
              }, window.origin);
```

Connect the current account.

### signMessage

```typescript
window.postMessage({
                  target: "erdw-inpage",
                  type: "signMessage",
                  data: data,
              }, window.origin);
```

signMessage.

### signTransactions

```typescript
window.postMessage({
                  target: "erdw-inpage",
                  type: "signTransactions",
                  data: data,
              }, window.origin);
```

signTransactions.

### extensionId

```typescript
window.safepalEGLDProvider ={extensionId:"lgmpcpglpngdoalbgeoldeajfclnhafa"};
window.elrondWallet = window.safepalEGLDProvider;
```

extensionId.
