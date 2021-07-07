const fs = require('fs');

const chirpViews = JSON.parse(fs.readFileSync(`${__dirname}/chirpViews.json`));

const formatChirpView = (chirpView) => {};

chirpViews.map((chirpView) => console.log(formatChirpView(chirpView)));

module.exports = {
  formatChirpView,
};
