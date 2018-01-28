# Blocks

## 创建项目

```shell
$ mkdir blocks && cd blocks
$ npm init
$ npm install react react-dom --save
$ npm install webpack --save-dev
$ git init
$ echo "# Blocks" >> README.md    # 其他说明文档
$ echo ".DS_Store" >> .gitignore    # 其他需要忽略的文件目录
$ git add .
$ git commit -m "Init project"
$ git remote add origin git@github.com:beitaz/blocks.git
$ git push -u origin master
$ mkdir src && touch src/index.js && touch webpack.config.js
$ npm install rimraf html-webpack-plugin --save-dev
$ npm install babel-loader babel-core babel-preset-env babel-preset-react --save-dev
$ npm install copy-webpack-plugin --save-dev
$ npm install eslint eslint-loader eslint-plugin-react --save-dev
$ npm install css-loader style-loader sass-loader node-sass --save-dev
$ npm install postcss-loader autoprefixer --save-dev
```

*提示：* 使用 `npm prune` 删除不需要的依赖包。