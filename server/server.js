const express = require('express');
const cors = require('cors');
const app = express();

require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({extended: true}));

require('./routes/pirate.routes')(app);

const port = 8000

app.listen(port, () => console.log(`Server is UP and RUNNING thru your favorite radio station: ${port} FM.`))