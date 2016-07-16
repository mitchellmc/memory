import finalhandler from 'finalhandler';
import http from 'http';
import serveStatic from 'serve-static';

const serve = serveStatic('build/', {'index': ['index.html', 'index.htm']});
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
});

// Listen
server.listen(3000);
