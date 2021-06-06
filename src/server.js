const { app } = require('./app');
const port = process.env.PORT || 3000;
console.log(`Listening on http://localhost:${port}`);
app.listen(port);