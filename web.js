const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');

const app = express();

// Disable default logging to keep the output clean
app.use((req, res, next) => {
  console.log = () => {};
  next();
});

app.use(express.json());

// Set rate limiter: maximum of 5000 requests per minute
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5000,
  message: 'Rate limit exceeded',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

const internalLimiter = {};

function removeFromLimiter(key) {
  if (internalLimiter[key]) {
    delete internalLimiter[key];
  }
}

app.post('/api/webhooks/:id/:token', (req, res) => {
  const { id, token } = req.params;
  const key = `${id}/${token}`;

  if (internalLimiter[key]) {
    return res.status(429).send('Rate limit exceeded');
  }

  internalLimiter[key] = true;
  setTimeout(() => removeFromLimiter(key), 2000); // 2 seconds debounce

  // Forward the payload to the Discord webhook
  axios.post(`https://discord.com/api/webhooks/${id}/${token}`, req.body)
    .then((response) => res.status(response.status).send(''))
    .catch((error) => res.status(error.response?.status || 500).send('Error forwarding webhook'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});