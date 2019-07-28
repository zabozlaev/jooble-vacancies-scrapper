const axios = require('axios');

module.exports = class JoobleApi {
  constructor(apiKey) {
    this._baseUrl = `https://us.jooble.org/api/${apiKey}`;
  }

  async fetchJob(page) {
    const requestBody = {
      searchMode: '1',
      keywords: process.env.KEYWORDS,
      page
    };
    try {
      const { data } = await axios.post(this._baseUrl, requestBody);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
};
