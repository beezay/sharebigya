import axios from 'axios';
export const requestOrgList = () => {
  return axios.request({
    method: 'get',
    url: 'https://api.sharebigya.com/api/v1/stock/org'
  });
};

export const APIURL = 'https://api.sharebigya.com/api/v1/stock/org';
