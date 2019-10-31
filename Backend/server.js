const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res) => res.send('API Running'))

//define Route 
app.use('/api/user',require('./routes/api/user'))


//if port is taken changes to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server Started ${PORT}`));
