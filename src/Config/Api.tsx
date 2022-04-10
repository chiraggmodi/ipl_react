import axios from "axios";

const api_key = "5b171e1e-5651-4878-830b-aa9a929c7930";

export default axios.create({
    baseURL: `https://api.cricapi.com/v1/`,
    params: {
      apikey: api_key
    },
    timeout: 1000,
    headers: {'Content-Type': 'application/json'},
    
});