const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'English_vocabulary_test', 'public')));

// 루트 경로에 대한 라우팅
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'English_vocabulary_test', 'public', 'English_vocabulary_test.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
