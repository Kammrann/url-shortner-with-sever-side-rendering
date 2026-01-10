const express = require("express");
const URL = require("../models/url.js");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("STATIC ROUTE HIT");
  const allurls = await URL.find({});
  console.log(allurls);
  res.render("home", {
    urls: allurls,
  });
});

module.exports = router;
