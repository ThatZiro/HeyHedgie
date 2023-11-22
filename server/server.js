const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Static route to serve up the content of our built webpack bundle which is located in the dist folder
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
