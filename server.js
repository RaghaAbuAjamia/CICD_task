
const http = require('http');


const server = http.createServer((req, res) => {
  res.end('Hello Hello!');
});


<<<<<<< HEAD
server.listen(3000,  () => {
=======
server.listen(3000, () => {
>>>>>>> origin/main
  console.log(`Server is running on port 3000!`);
});

