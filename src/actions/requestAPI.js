const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const searchAPI = async () => {
  const request = await fetch(API_URL);
  const requestJson = await request.json();
  delete requestJson.USDT;
  // console.log(Object.keys(requestJson));
  return Object.keys(requestJson);
};

export default searchAPI;
