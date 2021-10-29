import axios from 'axios';

// Advance Decline 
export function requestAdvDecData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/price/advance_decline/?format=json"
  });
}

// Advance Decline 4
export function requestAdvDec4Data(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/price/advance_decline_4/?format=json"
  });
}

