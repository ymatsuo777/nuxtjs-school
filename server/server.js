// httpモジュールを読み込み、インスタンスを生成
var http = require('http');

var dataCnt = 0;

// HTTPサーバーのイベントハンドラを定義
http.createServer(function (req, res) {

    // HTTPヘッダを出力
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    var data = [{
      no: 1000,
      name: 'サンプル'
    }];

    data.map(d => d.no += dataCnt);

    dataCnt += data.length;

    // レスポンスの中身を出力
    res.end(JSON.stringify(data));

}).listen(1234, '127.0.0.1'); // 127.0.0.1 の 1234番ポートで待機

console.log('server running on port 1234');
