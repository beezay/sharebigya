import axios from 'axios';


export function requestTopBrokersData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/floor_sheet/get_top_buys_sell_stats/",
  });
}
