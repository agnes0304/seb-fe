function getNewsAndWeatherAll() {
  // promise에 fetch를 넣어. fetch는 네이티브 프로미스니까. 그리고 그게 성공을 하면, 거기서 패치된 걸 가지고 와서 json()
  return Promise.all([fetch(newsURL), fetch(weatherURL)]) // 첫번째 all로 fetch(비동기 처리)를 진행
  .then(([newsResponse, weatherResponse]) => { //그 결과 값으로 responses를 받아도 되지만 then 내부에서 사용하기 위해서 배열로 전달
    return Promise.all([newsResponse.json(), weatherResponse.json()]); // 다시 response를 json()으로. 가능한 이유? 일단 fetch해서 가지고 온 거고, 둘은 비동기 처리하는 함수니까. 
  })
  .then(([json1, json2]) => { // 결과값으로 json results를 가지고 올 수 있지만 then 내부에서 이를 사용하기 위해서 배열로 전달.
    return { news : json1.data, weather : json2 }
  })
}

getNewsAndWeatherAll();

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
