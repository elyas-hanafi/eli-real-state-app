import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '064fd4d4c6mshc7daa094a994aa4p11b1f6jsn52c23c69ea70' ,
    },
  });
    
  return data;
}