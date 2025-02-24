const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ data: 'data' });
});
app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname) + '/views/index.html');
});

app.get('/data', (req, res, next) => {
  const data = {
    Name: 'Jureli',
    Roll: 15,
    subject: ['CC', 'SPM'],
    Firstterm: {
      CC: 56,
      SPM: 55,
      remark: 'Pass',
    },
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
