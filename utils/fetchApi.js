import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '654d75bd77mshbd60770a7ba1aeap1d3bb8jsnfb84ee110592',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    
    }
    });
    return data;
}
