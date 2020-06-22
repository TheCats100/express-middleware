const port = 8000;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.listen(port, (err) => {
  if (err) {
    throw new Error(`An error occurred: ${err.message}`);
  }
  console.log(`Server is listening on ${port}`);
});

app.get('/superMiddleware', (req, res, next) => {
    console.log('hello middleware')
    next()
}, (req, res, next) => {
    res.send('hello world');
    next()
});
