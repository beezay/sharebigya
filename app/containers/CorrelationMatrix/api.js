import axios from 'axios';
export function requestCorrelationMatrixData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/index-chart/plot_correlation/"
  });
}
