import axios from 'axios';
export function requestOhlcVolData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/index-chart/plot_ohlc_vol/"
  });
}


