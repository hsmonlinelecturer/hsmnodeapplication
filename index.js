const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname) + '/views/index.html');
});

app.get('/data', (req, res, next) => {
  const data = [
    {
      date: '2018-05-06',
      temperatureC: 1,
      summary: 'Freezing',
      temperatureF: 33,
    },
    {
      date: '2018-05-07',
      temperatureC: 14,
      summary: 'Bracing',
      temperatureF: 57,
    },
    {
      date: '2018-05-08',
      temperatureC: -13,
      summary: 'Freezing',
      temperatureF: 9,
    },
    {
      date: '2018-05-09',
      temperatureC: -16,
      summary: 'Balmy',
      temperatureF: 4,
    },
    {
      date: '2018-05-10',
      temperatureC: -2,
      summary: 'Chilly',
      temperatureF: 29,
    },
  ];
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
