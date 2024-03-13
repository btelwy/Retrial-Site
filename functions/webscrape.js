const axios = require("axios");

//where config contains at least baseURL, url, and method
exports.scrape = async function scrape(url)
{
    try {
        return (await axios.get(url));
    }
    catch {
        throw("Something went wrong in scraping.");
    }
}