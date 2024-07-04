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

// /chapter2 경로에 대한 라우팅
app.get('/chapter2', (req, res) => {
  res.sendFile(path.join(__dirname, 'English_vocabulary_test', 'public', 'English_vocabulary_chapter2.html'));
});

app.get('/chapter3', (req, res) => {
  res.sendFile(path.join(__dirname, 'English_vocabulary_test', 'public', 'English_vocabulary_chapter3.html'));
});

app.get('/chapter4', (req, res) => {
  res.sendFile(path.join(__dirname, 'English_vocabulary_test', 'public', 'English_vocabulary_chapter4.html'));
});

app.get('/chapter5', (req, res) => {
  res.sendFile(path.join(__dirname, 'English_vocabulary_test', 'public', 'English_vocabulary_chapter5.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
