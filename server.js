const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {

  const pageData = {
    title: 'صفحه اصلی',
    heading: 'خوش آمدید',
    content: 'این محتوای پیش‌فرض صفحه است.',
    currency_price:1130000,
    features: ['ویژگی اول', 'ویژگی دوم', 'ویژگی سوم'],
    user: null
  };
  
  res.render('index', pageData);
});

app.get('/marker', (req, res) => {

  const pageData = {
    title: 'صفحه اصلی'
  };
  
  res.render('marker', pageData);
});

app.get('/whiper', (req, res) => {

  const pageData = {
    title: 'صفحه اصلی'
  };
  
  res.render('whiper', pageData);
});


app.post('/update-content', (req, res) => {
  const { section, newContent } = req.body;
  
  
  console.log(`بخش ${section} با محتوای جدید به روز شد: ${newContent}`);
  res.json({ success: true, message: 'محتوای با موفقیت به روز شد' });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server Started at Address : http://localhost:${port}`);
});