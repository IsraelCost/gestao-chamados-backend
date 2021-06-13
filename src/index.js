require('dotenv').config('../.env');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const database = require('./database/index');

database.connect(function(err) {
    if (err) throw err;
    console.log("DB connected");
    app.emit('DB on');
});

app.use(cors());

app.use(express.json());

app.use(routes);

const { notFound, catchAll } = require('./middlewares/Global');

app.use(notFound);
app.use(catchAll);

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.on('DB on', () => {
    app.listen(port, host, () => {
        console.log(`Server is running on port: ${port}`);
    });
});
