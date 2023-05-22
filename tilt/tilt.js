const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

wss.on('connection', function connection(ws) {
  console.log('WebSocket connected');

  ws.on('message', function incoming(message) {
    console.log('Received message:', message);
    // Update the web page with the tilt value
    // For example:
    // document.getElementById('tilt').textContent = message;
  });

  ws.on('close', function close() {
    console.log('WebSocket disconnected');
  });
});

console.log('WebSocket server listening on port 8000');
