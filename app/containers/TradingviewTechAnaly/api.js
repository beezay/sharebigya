import axios from 'axios';
// export function requestTimeSeriesData(){
//   return axios.request({
//     method: 'get',
//     url: "https://api.sharebigya.com/api/v1/stock/price/?format=json",
//   });
// }
export function requestTradingViewData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/time-series/",
  });
}
export function requestEachTimeSeriesData(url){
  return axios.request({
    method: 'get',
    url:url,
  });
}