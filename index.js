require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errorMiddleware');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/tester', express.static(path.join(__dirname, 'tester')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'tester', 'index.html'));
});

app.use('/api/auth/', require('./routes/auth.routes'));
app.use('/api/support/', require('./routes/support.routes'));
app.use('/api/projects/', require('./routes/projects.routes'));
app.use('/api/pages/', require('./routes/page.routes'));
app.use('/api/user/', require('./routes/user.routes'));
app.use('/api/template/', require('./routes/pageTemplate.routes'));
app.use('/api/blocks/', require('./routes/block.routes'));

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      app.listen(3000, () => {
        console.log(`App has been started on port ${PORT}...`);
      });
    },
    err => {
      console.log('database connection failed ---', err);
    }
  );

export default app;
