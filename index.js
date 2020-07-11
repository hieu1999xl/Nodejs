const express = require('express');
const path = require('path')
const app = new express();

// //const express-session
const expressSession = require('express-session');

//const bodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//const authMiddleware
const authMiddleware = require('./middleware/authMiddleware')

//const ejs.js
const ejs = require('ejs');
app.set('view engine','ejs');

// khai baos express-file upload
const fileUpload = require('express-fileupload')
app.use(fileUpload())

//const controller url
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newPostController = require('./controllers/newPost')
const contactController =require('./controllers/contact')
const aboutController = require('./controllers/about')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectlfAuthenticatedMiddleware')
const logoutController = require('./controllers/logout')


// frame mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useUnifiedTopology: true })

const validateMiddleWare = require("./middleware/validationMiddleware")
app.use('/posts/store', validateMiddleWare)

app.use(express.static('public'))

app.listen(3000, () =>{
    console.log('app listening on port 3000')
});

app.use(expressSession({
    secret: 'keyboard cat'
   }))

global.loggedIn = null;
app.use("*", (req, res, next) =>{
    loggedIn = req.session.userId;
    next()
});


app.get('/', homeController)
app.get('/post/:id', getPostController)
app.post('/posts/store',authMiddleware, storePostController)
app.get('/posts/new', authMiddleware, newPostController)
app.get('/contact', contactController)
app.get('/about', aboutController)
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)
app.get('/auth/logout', logoutController)
app.use((req,res) => res.render('notfound'));