# api
- babelによるES6、ES7のコンパイル
- webpack
- HMRを行うWebpack Dev Server (node API利用。CLIでも実行可能)
- アプリケーションへの簡単なHMRへの対応
- アプリケーション・サーバーへのproxyの設定



```js
node install

npm start

```

proxyを利用しない場合は、[devserver.jsのproxyの設定](https://github.com/haradakunihiko/devserver-boilerplate/blob/master/api/devserver.js#L22)をコメントアウトし、


```
// apiで起動
npm run devserver

// cliで起動
npm run cli-devserver
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
