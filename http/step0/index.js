var http = require('http');

// http入门
http.createServer(function (req, res) {
  res.setHeader('Content-type', 'text/html; charset=utf-8');
  res.writeHead(200, 'success', {
    'Set-Cookie': ['name=liming', 'age=20'] // 设置cookie
  });
  res.write('<h1>hello北京<h1>');
  res.end();
}).listen(8080);