const fetch = require('node-fetch');

const moviesByQuery = async (query) => {
  await fetch('http://api.tvmaze.com/search/shows?q=aliens')
    .then((response) => response.json())
    .then((result) => console.log(result));
};

moviesByQuery();
