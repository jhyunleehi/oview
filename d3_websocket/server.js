const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('클라이언트가 연결되었습니다.');

  // 클라이언트로부터 메시지를 받을 때
  ws.on('message', message => {
    console.log('클라이언트로부터 받은 메시지:', message);
    
    // 모든 클라이언트에게 메시지 브로드캐스트
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // 연결 종료 시
  ws.on('close', () => {
    console.log('클라이언트가 연결을 종료했습니다.');
  });
});