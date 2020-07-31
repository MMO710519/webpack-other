const path=require('path');

module.exports={
  mode:'development',
  //エントリーポイントの設定
  entry:{
    app:'./src/js/app.js',
    search:'./src/js/search.js'
  },
  output:{
    // app.bundle.jsとsearch.bundle.jsが出力される
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'public/js')
  }
}
