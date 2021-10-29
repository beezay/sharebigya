import axios from 'axios';
export function requestPeriodicReturnMonthlyData() {
  return axios.request({
    method: 'get',
    url:
      'https://api.sharebigya.com/api/v1/stock/index-chart/plot_periodic_return_monthly/'
  });
}
