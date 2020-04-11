const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(compression());
app.use(express.static('build'));

app.get('*', (req, res, next) => {
  const options = {
    root: path.join(__dirname, 'build'),
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  };
  res.sendFile('index.html', options, (err) => {
    if (err) {
      res.send('error');
    }
  });
});

app.listen(port, () => {
  console.log('Server is running in port 3000');
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\nException origin: ${origin}`
  );
});
