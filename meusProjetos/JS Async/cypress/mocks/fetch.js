const results = require('./computerCategory')

const fetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url.includes('https://api.coincap.io/v2/assets/')) {
      const productId = url.split('items/')[1]
      return Promise.resolve(results.results.find(({id}) => id === productId ))
    }
    return Promise.resolve(results)
  } 
});

module.exports = fetch;
