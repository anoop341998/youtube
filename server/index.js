const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('./config/key');
const env = require('dotenv').config();
const path = require('path');


mongoose.connect( config.mongoURI,{
  useNewUrlParser: true, useUnifiedTopology: true,
  useCreateIndex: true, useFindAndModify: false
})
        .then(() => console.log('Db connected'))
        .catch((err) => console.log(err.message));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users',require('./routes/users'));
app.use('/uploads',express.static('uploads'));
app.use('/api/video', require('./routes/video'));
app.use('/api/subscribe', require('./routes/subscribe'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/like', require('./routes/likes'));


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }

console.log(process.env.NODE_ENV);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

console.log("port is",port);