require('dotenv').config();

module.exports = {
  rootUrl: process.env.ROOT_URL,
  environment: process.env.ELEVENTY_ENV,
  GTMID: process.env.GTMID,
};
