


import axios from 'axios';

export  const pagination = async (data) => {
    
    let url = data.data.next
    let count = 0;
    let allData = data.data.results;
    const arrayCount = data.data.count;
    

    let a = [allData];
    let b = null;
    let c =  data.data.results.length;
    let z = null;
    let d = null;
    
  do{
       await axios.get(url)
          .then(function (response) {
            
            a.push(...response.data.results);
            b = response.data.results.length;
            c = c + b;
            
        
            if(response.data.next !== null){
          
              url = response.data.next;
            }
            // response.data.results.map((item)=> allData.push(item))
           

            
            return response.data;
        })

        count = allData.length;
        
        
        
}while(c != arrayCount)



//  z = [...a[0],...a[1],...a[2],...a[3]]
// 





return z;
}