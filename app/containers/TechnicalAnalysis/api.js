import axios from 'axios';
export function requestTechAnalyData(){
  return axios.request({
    method: 'get',
    url: "https://api.sharebigya.com/api/v1/stock/price/tech_analysis/?format=json",
  });
}