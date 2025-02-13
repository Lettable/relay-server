const express = require('express');
const Gun = require('gun');
const app = express();

app.use(express.static('public'));

const server = app.listen(process.env.PORT || 8080, () => {
  console.log('Relay server listening on port ' + (process.env.PORT || 8080));
});

Gun({ web: server });
