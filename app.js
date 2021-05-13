const express = require('express');
const request = require('request');

const PORT = process.env.PORT || 8080;
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  return res.status(200).json({ type: 'status', message: "Proxy started successfully" });
});

app.get('/proxy-html', (req, res) => {
  let targetUrl = req.query.url;

  request(
    { url: targetUrl },
    (error, response, body) => {
      // if (error || response.statusCode !== 200) {
      //   return res.status(500).json({ type: 'error', message: err.message });
      // }

      if (error || response.statusCode !== 200) {
        if (response) {
          return res.status(500).json({ type: 'error', message: err.message });
        } else {
          console.log({response, error})
          return res.status(response?.statusCode ?? 500).json({ type: 'error', message: 'Something went wrong !' });
        }
      }

      res.send(body)
    }
  )
});

app.get('/proxy-json', (req, res) => {
  let targetUrl = req.query.url;

  request(
    { url: targetUrl },
    (error, response, body) => {
      // if (error || response.statusCode !== 200) {
      //   return res.status(500).json({ type: 'error', message: err.message });
      // }

      if (error || response.statusCode !== 200) {
        if (response) {
          return res.status(500).json({ type: 'error', message: err.message });
        } else {
          console.log({response, error})
          return res.status(response?.statusCode ?? 500).json({ type: 'error', message: 'Something went wrong !' });
        }
      }

      res.json(body);
    }
  )
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));