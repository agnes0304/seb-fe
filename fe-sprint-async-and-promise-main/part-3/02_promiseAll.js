function getNewsAndWeatherAll() {
  // promise에 fetch를 넣어. fetch는 네이티브 프로미스니까. 그리고 그게 성공을 하면, 거기서 패치된 걸 가지고 와서 json()
  return Promise.all([fetch(newsURL), fetch(weatherURL)]) 
  .then(([newsResponse, weatherResponse]) => { 
    return Promise.all([newsResponse.json(), weatherResponse.json()]); // 응답을 json형태로 변환시킨다.
  })
  .then(([json1, json2]) => { 
    // let result = { news : json1.data, weather : json2 };
    // console.log(result);
    return { news : json1.data, weather : json2 }
  })
}

getNewsAndWeatherAll();

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}

// 같은 결과 리턴
