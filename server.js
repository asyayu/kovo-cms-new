const express = require('express');
const path = require('path');
const connectDB = require('./config/database');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const homeRoutes = require('./routes/home');
const methodOverride = require('method-override');
const courseRoutes = require('./routes/courses');
const userRoutes = require('./routes/users');
const ExpressError = require('./utils/ExpressError');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

require('dotenv').config({ path: './config/.env' });

connectDB();

// MIDDLEWARE

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const PORT = process.env.PORT;

const sessionConfig = {
    secret: process.env.FLASH_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};
app.use(session(sessionConfig));
app.use(flash());

// PASSPORT
// passport.session() middleware is needed for persistent login
// sessions
// must be below app.use(session())
app.use(passport.initialize());
app.use(passport.session());
// telling passport to use the local strategy we've downloaded
// and required; for that local strategy the authentication
// method is located on the User model (automatically added by
// passport)
passport.use(new LocalStrategy(User.authenticate()));
// tells passport how to serialize the user (how to store data
// in the session) and de-serialize
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// ROUTES

app.use('/', homeRoutes);
app.use('/courses', courseRoutes);
app.use('/', userRoutes);

// ERROR HANDLING

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh no, something went wrong...';
    res.status(statusCode).render('error', { err, title: 'Error' });
});

app.listen(process.env.PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
});
