const express = require('express')
const router = express.Router() //please use router in this file / not app


router.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}, Thank you for submitting you request!`);
});

router.get("/:numbers", (req, res) => {
  res.send(`${req.params.numbers}`);
  // res.json({user: 'ariel', id: `${req.params.numbers}`})
});

router.get("/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});

router.get("/:userID/profile", (req, res) => {
  res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});

router.get("/:userID/profile/:data", (req, res) => {
  res.send(
    `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
  );
});

module.exports = router;