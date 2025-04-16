const { nanoid } = require("nanoid");
const Url = require("../models/url");
const { timeStamp } = require("console");

async function handleGenetateUrl(req, res) {
  const body = req.body;
  console.log(body);

  // Check if the url key is present in the request body
  if (!body.url) return res.status(400).json({ err: "url is required" });

  // Generate a short ID for the URL
  const shortId = nanoid(5);

  // Save the data to the database
  try {
    await Url.create({
      userId: shortId,
      redirectUrl: body.url,
      visitHistory: [],
    });

    // Respond with the generated short URL ID
    return res.render("home", { id: shortId });
  } catch (err) {
    // Handle any errors during database insertion
    console.error(err);
    return res.status(500).json({ err: "Failed to create the short URL" });
  }
}

async function getGeneratedUrl(req, res) {
  const Sortid = req.params.Sortid;

  const entry = await Url.findOneAndUpdate(
    {
      Sortid,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
}

async function getAllhistory(req, res) {
  const shortId = req.params.shortId;
  const result = await Url.findOne({ shortId });

  return res.json({
    totalclick: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}
module.exports = { handleGenetateUrl, getGeneratedUrl, getAllhistory };
