const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')





app.use(bodyParser.json())
//import ROUTES
const postsRoute = require('./routes/posts')

app.use('/posts' , postsRoute)

//ROUTES
app.get('/' , (req,res)=>{
    res.send("MAIN PAGE")
})


// CONNECT TO DB
mongoose.connect
(process.env.DB_URI,
{ useUnifiedTopology: true ,  useNewUrlParser: true  },()=>{
    console.log('CONNECTED TO DB')
})
// LISTENING ON PORT 3000
app.listen(3000  , () => {
    console.log('NODE SERVER STARTED on port 3000')
})