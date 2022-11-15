import axios from "axios";

const read = (url) =>  {
     return  axios
          .get(url)
  };

  const update = (section, value) => {
  
     var url = `/update/${section}/${value}`;        
     axios
         .get(url)
         .then(response => {
           console.log(response.body)
         });
 }
export { read, update};