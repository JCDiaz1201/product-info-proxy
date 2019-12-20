const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors');
const app = express();
const port = 5500;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
