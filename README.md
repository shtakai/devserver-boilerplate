# api
Node apiによるWebpack Dev Server・HMRを利用するための設定。

```js
node install

// node apiで起動
npm run api-devserver

// cliで起動
npm run cli-devserver
```

proxyを利用する場合は、`devserver.js`のproxyの行をコメントアウトし、

```
npm run appserver
npm run api-devserver
```


# api-with-react
Node apiによるWebpack Dev Server・HMRを利用する設定。+ react HMR対応

# middleware
middlewareによるHMRを利用するための設定。
