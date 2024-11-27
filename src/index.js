const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes/index.js');

// use morgan
app.use(morgan('combined'));

// parse dữ liệu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route static file
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình middleware để biên dịch SASS thành CSS

//setup template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs'); // đặt handlebars làm mặc định
app.set('views', './src/views');

//render template
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
