//MODULES
const express = require('express');
const bodyParser = require('body-parser');

//CONSTANTS
const app = express();
const PORT = process.env.PORT || 8080;

//APPLICATIONS
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//TEST ROUTE
app.get('/test', function (req, res) {
  res.status(200).send('smoke test OK');
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`);
})