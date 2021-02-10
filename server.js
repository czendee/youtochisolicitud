const express = require('express');

const app = express();

app.use(express.static('./dist/angular-httpclient-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-httpclient-app/'}),
);

app.listen(process.env.PORT || 8080);
