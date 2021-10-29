import axios from 'axios';
export function requestIndexData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/index/?format=json"
  });
}

export function requestEachindexData(url){
  return axios.request({
    method: 'get',
    url: url,
  });
}

export function requestSignalData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/price/get_signals/?format=json"
  });
}
