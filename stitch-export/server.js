const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT) || 3000;
const rootDirectory = __dirname;

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.webp': 'image/webp'
};

function send(response, statusCode, body, contentType = 'text/plain; charset=utf-8') {
  response.writeHead(statusCode, {
    'Content-Type': contentType,
    'Content-Length': Buffer.byteLength(body),
    'X-Content-Type-Options': 'nosniff'
  });
  response.end(body);
}

const server = http.createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    send(response, 405, 'Method Not Allowed');
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host || host}`).pathname);
  } catch {
    send(response, 400, 'Bad Request');
    return;
  }

  const requestedPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.resolve(rootDirectory, `.${requestedPath}`);

  if (filePath !== rootDirectory && !filePath.startsWith(`${rootDirectory}${path.sep}`)) {
    send(response, 403, 'Forbidden');
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      send(response, 404, 'Not Found');
      return;
    }

    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    response.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });

    if (request.method === 'HEAD') {
      response.end();
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!response.headersSent) send(response, 500, 'Internal Server Error');
      else response.destroy();
    });
    stream.pipe(response);
  });
});

server.listen(port, host, () => {
  console.log(`Portfolio server: http://${host}:${port}`);
});
