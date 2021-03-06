const express = require('express')
const path = require('path');
const app = express();
const members = require('./Members');

const logger = require('./middleware/logger');


// Init middleware...
    // app.use(logger);


// Get all members...
app.get('/api/members', (req, res) =>  res.json(members));

//Get Single Member...
app.get('/api/members/:id', (req, res) => {
    res.json()
});



// Set static folder...
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


