// httpモジュールを読み込み、インスタンスを生成
var http = require('http');

// HTTPサーバーのイベントハンドラを定義
http.createServer(function (req, res) {

    // HTTPヘッダを出力
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    var data = [{
      no: 1,
      name: 'サンプル太郎'
    },{
      no: 2,
      name: 'サンプル次郎'
    },{
      no: 3,
      name: 'サンプル三郎'
    }];

    // レスポンスの中身を出力
    res.end(JSON.stringify(data));

}).listen(1235, '0.0.0.0'); // 127.0.0.1 の 1234番ポートで待機

console.log('server running on port 1235');
