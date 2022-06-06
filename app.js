const express=require('express');
const expressHandlebars=require('express-handlebars');
const router=require('./router');
const path=require('path');

const app=express();
const port=process.env.PORT || 3000;
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout:'main',
}));
app.set('view engine','handlebars');
app.use(express.static(path.join(__dirname,'public')));
app.get('/',router.home);
app.get('/about',router.about);
app.get('/news',router.news);
app.get('/product',router.product);
app.get('/contact',router.contact);
app.listen(port,()=>console.log('Server Start On',port,'Port'));
