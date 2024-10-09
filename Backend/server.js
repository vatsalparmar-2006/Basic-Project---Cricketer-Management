const express = require('express');
const app = express();

require('dotenv').config();

const cricketerRoutes = require('./Router.Cricketers');

app.use('/', cricketerRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is running @ "+PORT);
});