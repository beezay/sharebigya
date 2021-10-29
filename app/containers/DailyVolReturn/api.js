import axios from 'axios';
export function requestDailyVolReturnData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/index-chart/plot_return_vol_1day/"
  });
}


