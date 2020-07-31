// 開発用の設定ファイル

// webpack-mergeを読み込む
const {merge} = require('webpack-merge');
// 共通設定を読み込む
const baseConfig=require('./webpack.base.config.js');

// 開発用の設定と共通設定をマージする
module.exports= merge(baseConfig,{
  mode:'development',
  // ソースマップの設定
  devtool:'cheap-module-eval-source-map'
});
