
import { loadState, saveState } from "../Utils/localstorage";
const axios = require('axios');



 



  ///////////////////////////////////////////////////////

  export  async function getQoutesApi(){
   // axios.defaults.headers.common["Authorization"] = `Bearer ${loadState().QoutesReducer.access_token}`;
    return await axios.get('https://type.fit/api/quotes')
    .then(function (response) {
      console.log(response)
      return response;
    })
    .catch(function (error) {
     console.log(error)
     return error;
    })
  };

   

