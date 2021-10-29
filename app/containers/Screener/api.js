import axios from 'axios';
export function requestScreenerData() {
  return axios.request({
    method: 'get',
    url: 'https://api.sharebigya.com/api/v1/stock/screener/?format=json',
  });
}
