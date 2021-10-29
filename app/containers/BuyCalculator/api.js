import axios from 'axios';
export function requestBuySellCalc(value){
  return axios.request({
    method: 'post',
    data: value,
    headers: {
      'Content-Type': 'application/json'
    },
    url: "https://api.sharebigya.com/api/v1/stock/buy-sell-calculator/"
  });
}
