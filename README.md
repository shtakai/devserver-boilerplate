# api
Node apiによるWebpack Dev Server・HMRを利用するための設定。(CLIの実行も可能)

```js
node install

// node apiで起動
npm run devserver

// cliで起動
npm run cli-devserver
```

proxyを利用する場合は、`devserver.js`のproxyの行のコメントアウトをはずし、

```
npm run appserver
npm run api-devserver
```

を実行

# api-with-react
Node apiによるWebpack Dev Server・HMRを利用する設定。+ react HMR対応

# middleware
middlewareによるHMRを利用するための設定。
