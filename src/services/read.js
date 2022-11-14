import axios from "axios";

const read = (url) =>  {
     return  axios
          .get(url)
  };
export default read;