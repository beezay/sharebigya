


import axios from 'axios';

export  const pagination = async (data) => {
    
    let url = data.data.next
    let count = 0;
    let allData = data.data.results;
    const arrayCount = data.data.count;
    
    
  do{
       await axios.get(url)
          .then(function (response) {
        
            if(response.data.next !== null){
          
              url = response.data.next;
            }
            response.data.results.map((item)=> allData.push(item))
            
            return response.data;
        })

        count = allData.length;
}while(count != arrayCount)



return allData;
}