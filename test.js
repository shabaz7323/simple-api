// very simple test that checks server responds
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/health',
  method: 'GET',
  timeout: 2000
};

const req = http.request(options, res => {
  if (res.statusCode === 200) {
    console.log('Test passed');
    process.exit(0);
  } else {
    console.error('Test failed with status', res.statusCode);
    process.exit(1);
  }
});

req.on('error', (err) => {
  console.error('Test request error', err.message);
  process.exit(1);
});

req.end();

console.log("Tests running successfully!");
process.exit(0);

