const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const { url } = JSON.parse(event.body);
    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'URL is required' })
      };
    }
    const response = await fetch(url);
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to fetch URL' })
      };
    }
    const content = await response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({
        source: url,
        content: content.slice(0, 1000)
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error: ' + error.message })
    };
  }
};
