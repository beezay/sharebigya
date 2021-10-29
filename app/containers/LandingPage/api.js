import axios from 'axios';
export function requestPostSubscribe(value){
  return axios.request({
    method: 'post',
    data: value,
    headers: {
      'Content-Type': 'application/json'
    },
    url: "https://api.sharebigya.com/api/v1/account/subscribe/"
  });
}
