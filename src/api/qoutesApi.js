
import { loadState, saveState } from "../Utils/localstorage";
const axios = require('axios');



 


export  async function getFamousQoutes(data){
  axios({
    "method":"GET",
    "url":"https://andruxnet-random-famous-quotes.p.rapidapi.com/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"andruxnet-random-famous-quotes.p.rapidapi.com",
    "x-rapidapi-key":"fa99f48875msh3a4213b1fb2af69p14cf96jsn25bace32d06a",
    "useQueryString":true
    },"params":{
    "cat":"famous",
    "count":"50"
    }
    })
  .then(function (response) {
    console.log(response)
    return response;
  })
  .catch(function (error) {
   console.log(error)
   return error;
  })
};
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

   

