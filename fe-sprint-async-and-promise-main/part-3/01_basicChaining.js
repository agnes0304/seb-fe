const newsURL = "http://localhost:4999/data/latestNews";
const weatherURL = "http://localhost:4999/data/weather";

function getNewsAndWeather() {
  let result = {};
  return fetch(newsURL)
    .then((response) => response.json())
    .then((newsData) => {
      result.news = newsData.data;
      return fetch(weatherURL);
    })
    .then((response) => response.json())
    .then((weatherData) => {
      result.weather = weatherData;
      console.log(result);
      return result;
    });
}

// 이거 왜 안 되는 지 오류 찾기
// function getNewsAndWeather() {
//   return fetch(newsURL)
//     .then((newsResponse) => newsResponse.json())
//     .then((newsData) => {
//       return fetch(weatherUrl)
//         .then((weatherResponse) => weatherResponse.json())
//         .then((weatherData) => {
//           const obj1 = newsData;
//           const obj2 = weatherData;
//           const obj3 = obj1 + obj2;
//           console.log(obj3);
//           return obj3;
//         });
//     });
// }

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeather,
  };
}

getNewsAndWeather();
