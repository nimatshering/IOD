function sentiment() {
  var Sentiment = require("sentiment");
  var sentiment = new Sentiment();
  var result = sentiment.analyze("Dogs are super good.");
  // console.dir(result); // Score: -2, Comparative: -0.666
  return result;
}

console.dir(sentiment());
