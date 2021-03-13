const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse Aplication/JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Panggil Routes
const routes = require('./router');
routes(app);

app.listen(2000, () => {
    console.log(`Portnya Berjalan Aris....`);
});
    
