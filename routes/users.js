const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');

router.get('/register', (req, res) => {
  res.render('users/register', { title: 'Register' });
});

router.post(
  '/register',
  catchAsync(async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = new User({ username, isAdmin: false });
      const registeredUser = await User.register(user, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) => {
        if (err) {
          console.log(err);
        } else {
          req.flash('success', 'Successfully registered a new user!');
          res.redirect('/');
        }
      });
    } catch (e) {
      req.flash('error', e.message);
      res.redirect('register');
    }
  })
);

router.get('/login', (req, res) => {
  res.render('users/login', { title: 'Login' });
});

// passport comes with a built-in middleware for login
router.post(
  '/login',
  passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/login',
  }),
  (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.logout(() => {
    req.flash('success', 'Goodbye!');
    res.redirect('/');
  });
});

module.exports = router;
