import axios from 'axios';
export function requestheatMapData() {
  return axios.request({
    method: 'get',
    url: 'https://api.sharebigya.com/api/v1/stock/price/heat_map/'
  });
}
