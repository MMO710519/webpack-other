// 開発用と本番用の共通設定ファイル

const path=require('path');

module.exports={
  entry:'./src/js/app.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'public/js')
  }
};
