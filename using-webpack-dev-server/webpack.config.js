const path=require('path');

module.exports={
  mode:'development',
  entry:'./src/js/app.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'public/js'),
    // ブラウザから出力したファイルにアクセスする際のパス
    publicPath:'/js/'
  },
  // webpack-dev-serverの設定
  devServer:{
    // サーバー起動時にブラウザを自動的に起動する
    open:true,
    // ポート番号
    port:9000,
    //コンテンツのルートディレクトリ
    // 今回の場合、ブラウザ起動時に./public/index.htmlが開かれる
    contentBase:'./public'
  }
};
