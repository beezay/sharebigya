import axios from 'axios';
export function requestPeriodicBarData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/index-chart/periodic_return_bar/"
  });
}


