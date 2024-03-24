const axios = require("axios");

//where config contains at least baseURL, url, and method
exports.scrape = async function scrape(url)
{
    const config = {
        headers: {
            'Content-Type': 'text/html'
        }
    }

    var response = await axios.get(url, config);
    return response.data;
}