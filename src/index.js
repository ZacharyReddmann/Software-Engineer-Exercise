const fs = require('fs');

const chirpViews = JSON.parse(fs.readFileSync(`${__dirname}/chirpViews.json`));

const formatChirpView = (chirpView) => 
{
   //Creating new string for date data since JS passes objects by reference and I do not want to mutate the original
   let dateString = chirpView["date"];
   let messageString = chirpView["message"];
   let emoji = String.fromCodePoint(0x1F525);
 
   //Getting proper dateString
   let monthString = dateString.substring(5,7);
   let yearString = dateString.substring(0,4);
   let dayString = dateString.substring(8,10);
   dateString = monthString + "/" + dayString + "/" + yearString;
 
   //add the lengths of the components together. 3 represents how much white space will be added, 1 between each component
   let chirpStringSize = 3 + chirpView["message"].length + dateString.length + chirpView["views"].length + chirpView["author"].length;

   return "";
};

chirpViews.map((chirpView) => console.log(formatChirpView(chirpView)));

module.exports = {
  formatChirpView,
};
