const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes/index.js');
const connectToDb = require('./config/db');

// use morgan
app.use(morgan('combined'));
// Endpoint để nhận dữ liệu từ client

// parse dữ liệu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route static file
app.use(express.static(path.join(__dirname, 'public')));

// cấu hình mongoose kết nối cơ sở dữ liệu

//kết nối với MongoDB
connectToDb.connectToDb();
//setup template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      renderIf: function (condition, options) {
        return condition ? options.fn(this) : '';
      }
    }
  })
);
app.set('view engine', 'hbs'); // đặt handlebars làm mặc định
app.set('views', './src/views');

//render template
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
