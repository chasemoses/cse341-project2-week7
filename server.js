const express = require('express');
const mongodb = require('./database/mongodb');
const app = express();
const port = process.env.PORT || 8080;

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};


app
// auth router attaches /login, /logout, and /callback routes to the baseURL
.use(auth(config))
// req.isAuthenticated is provided from the auth router
.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  })
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use('/', require('./routes/index'));

mongodb.connectDB();

app.listen(port, () =>
console.log(`Running on port ${port}`));