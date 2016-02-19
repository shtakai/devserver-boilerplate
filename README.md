# api
- babelによるES6、ES7のコンパイル
- webpack
- HMRを行うWebpack Dev Server (node API利用。CLIでも実行可能)
- アプリケーション・サーバーへのproxyの設定
- アプリケーションへの簡単なHMRへの対応


```js
node install

// node apiで起動
npm run devserver

// cliで起動
npm run cli-devserver
```

proxyを利用する場合は、[devserver.jsのproxyの行のコメントアウト](https://github.com/haradakunihiko/devserver-boilerplate/blob/master/api/devserver.js#L22)をはずし、

```
npm run appserver
npm run devserver
```

を実行

# api-with-react
- babelによるES6、ES7のコンパイル
- webpack
- HMRを行うWebpack Dev Server (node API利用。CLIでも実行可能)
- アプリケーション・サーバーへのproxyの設定
- アプリケーションへの簡単なHMRへの対応

- babelによるJSXのコンパイル
- babelによる、ReactアプリケーションのHMR対応

起動はapiと同様

# middleware
- babelによるES6、ES7のコンパイル
- webpack
- HMRを行うサーバー (expressを利用)
- アプリケーションへの簡単なHMRへの対応

```
npm install

npm start
```
