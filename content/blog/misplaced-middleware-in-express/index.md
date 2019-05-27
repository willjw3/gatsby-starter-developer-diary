---
title: 'Misplaced Middleware in Express'
tags: ["nodejs", "express"]
published: true
date: '2018-12-29'
---

[Source code at GitHub](https://github.com/willjw3/Coding-Tutorials/tree/master/Misplaced-Middleware-in-Express).

This post assumes some familiarity with Node.js and Express.js.

For those new to Node.js and Express, and having been tasked with completing a series of small projects designed to get you used to building [RESTful APIs](https://en.wikipedia.org/wiki/Representational_state_transfer), it's tempting to just throw HTTP methods and middleware functions into a server.js file and see what happens when information is submitted, especially if you're working with a file that has most of its required content already filled in for you and just needs you to write a method to go along with the ones already given. For example, imagine you're given the following code and are asked to add a method that gives, say, a specific `res.json()` response:

---
```
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI || 'mongodb://localhost/dbname' )

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
```
---

Maybe, as part of your project, you're told that you need register a new user, so you have to add a method that takes the new user's information (in this case, a first and last name) as input, add the user to a database, and return, say, `res.json({"first_name": "Walter", "last_name": "White", "status": "registered" })`. You then code in the outline of a POST method in the server.js file underneath the given 'not-found' middleware function because, perhaps, you feel it should be in the 'middle' of the file. Before adding any code that adds the user to a database, you decide to check if you're getting the required input from the user. The html for the user input form is in `views/index.html`, which is given in the source code for this exercise. Anyway, your POST method below the 'not-found' middleware looks like:

---
```
// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
})

app.post('/api/users/new-user', (req, res) =>{
 const firstName = req.body.first_name;
 const lastName  = req.body.last_name;
 res.json({first_name: firstName, last_name: lastName, "status": "registered"});
})
```
---

If this makes you feel uncomfortable, that's probably a good thing. Of course, if you're new to all of this, there's no shame in it if this doesn't bother you at all. It likely wouldn't have set any alarm bells off for me when I was new to using Node.js and Express. Anyway, imagine you enter the required information into the input fields:

First name: "Walter", Last Name: "White"

You click the 'Submit' button and see the response: `[object Object]`. <br>
That's no good. So what went wrong?

Well, rather than thinking too deeply about things at this point, taking a quick look at the Express documentation regarding writing middleware could bring clarity quickly. Seriously, have a look before continuing here... ([Express Docs - Writing middleware](https://expressjs.com/en/guide/writing-middleware.html))

Hopefully, the following passage caught your eye:
> "*The order of middleware loading is important: middleware functions that are loaded first are also executed first.*"

Looking at what the not-found middleware is doing should make it clear that being placed before our POST method is bad; it returns a call to the next function with a parameter object that says something important hasn't been found. (If you're not sure what a 404 error is, have a look [here](https://www.ionos.com/digitalguide/websites/website-creation/what-does-the-404-not-found-error-mean/).) <br>
This can't be good. What becomes of our POST method? To gain some insight, logging things to the console could prove useful. For example, we can verify if our methods are firing by enclosing two `console.log()` statements respectively.

---
```
app.use((req, res, next) => {
  console.log('fire 1')
  return next({status: 404, message: 'not found'})
});

app.post('/api/users/new-user', (req, res) =>{
  console.log('fire 2')
  const firstName = req.body.first_name;
  const lastName  = req.body.last_name;
  res.json({first_name: firstName, last_name: lastName, "status": "registered"});
});

```
---

Submitting the same information again and checking the console, we see:

---
```
Your app is listening on port 3000
fire 1
[object Object]

```
---

So, a couple of well-placed `console.log()` statements show us that the POST method isn't even firing. Bad, right? And, what's this `[object Object]` business, anyway? Well, it turns out that the 'not-found' middleware is returning a function call that isn't being handled properly, so we can add in an 'error-handler' middleware with a couple of investigative `console.log()` statements.

---
```
// not-found middleware
app.use((req, res, next) => {
  console.log('fire 1')
  return next({status: 404, message: 'not found'})
});

// error-handler middleware
app.use((err, req, res, next) => {
  console.log('fire 2')
  console.log(err);
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
});

app.post('/api/users/new-user', (req, res) =>{
  console.log('fire 3')
  const firstName = req.body.first_name;
  const lastName  = req.body.last_name;
  res.json({first_name: firstName, last_name: lastName, "status": "registered"});
});
```
---

Submitting the user input again and checking the console, we see:

---
```
Your app is listening on port 3000
fire 1
fire 2
{ status: 404, message: 'not found' }

```
---

Both the 'not-found' middleware and the 'error-handler' middleware fire and what was returned by the 'not-found' middleware seems to have been handled appropriately by the 'error-handler' middleware. That's good. The importance of these two middlewares seems clear now, right?<br>
Now, following what the Express documentation told us:

> "*The order of middleware loading is important: middleware functions that are loaded first are also executed first.*"

we take our POST Method, **which includes its own middleware function**, and place it *before* the 'not-found' and 'error-handler' middlewares in the server.js file.

---
```
app.post('/api/users/new-user', (req, res) =>{
  console.log('fire 1')
  const firstName = req.body.first_name;
  const lastName  = req.body.last_name;
  res.json({first_name: firstName, last_name: lastName, "status": "registered"});
});


// Not found middleware
app.use((req, res, next) => {
  console.log('fire 2')
  return next({status: 404, message: 'not found'})
});

// Error Handling middleware
app.use((err, req, res, next) => {
  console.log('fire 3')
  console.log(err);
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})
```
---

Submitting the user input, we see logged to the console:

---
```
Your app is listening on port 3000
fire 1

```
---

which means the POST method fires and the 'not-found' and 'error-handler' middlewares don't; `res.json()` in this method ends the request-response cycle. And, most importantly, in the browser

---
```
{"first_name":"Walter","last_name":"White","status":"registered"}
```
---

is displayed.<br>
Success.