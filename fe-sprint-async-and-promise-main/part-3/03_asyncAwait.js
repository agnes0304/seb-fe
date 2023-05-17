async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  const newsJson = await fetch(newsURL).then((response) => response.json());
  const weatherJson = await fetch(weatherURL).then((response) => response.json());

  return { news: newsJson.data, weather: weatherJson };
}

// getNewsAndWeatherAsync();

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
