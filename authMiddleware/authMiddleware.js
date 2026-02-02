require("dotenv").config();
const API_KEY = process.env.API_KEY

function apiKeyMiddleware(req, res, next) {
  const apiKey = req.headers['x-api-key']; // Check for x-api-key header

  if (!apiKey) {
    return res.status(401).json({ error: "Missing API key" });
  }

  if (apiKey !== API_KEY) {
    return res.status(403).json({ error: "Forbidden: Invalid API key" });
  }

  next(); // Key is valid, allow request to continue
}

module.exports = apiKeyMiddleware;
