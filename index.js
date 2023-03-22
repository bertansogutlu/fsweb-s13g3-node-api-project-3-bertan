// require your server and launch it
const app = require('./api/server');
const port = 5000;

app.listen(port, () => console.log("Server running on http://localhost:"+port))