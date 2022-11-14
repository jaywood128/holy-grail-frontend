import axios from "axios";

const update = (section, value) => {
  
    var url = `/update/${section}/${value}`;        
    axios
        .get(url)
        .then(response => {
          console.log(response.body)
        });
}
export default update; 