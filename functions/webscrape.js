exports.scrape = async function scrape(url)
{
    //where config contains at least baseURL, url, and method
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "text/html"
        }
    };

    var response = await fetch(url, options);
    let html = await response.text();

    return html;
}