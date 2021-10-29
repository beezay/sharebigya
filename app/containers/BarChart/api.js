import axios from 'axios';


export function requestTopStocksData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/floor_sheet/get_top_10_stocks_by_turnover/",
  });
}
