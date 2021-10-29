import axios from 'axios';
export function requestPeriodicReturnYearlyData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/index-chart/plot_periodic_return_yearly/"
  });
}


