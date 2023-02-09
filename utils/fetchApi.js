import axios from "axios";

export  const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '368e8d0f52msh09e93618dfb991ap195b5djsn3c6159b70f16',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}