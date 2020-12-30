import axios from 'axios';

const api = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public",
    params: {
        "ts": "1609028329",
        "apikey": "079df4f6c6a9cc8debb648d7454c46c7",
        "hash": "cf4ab3509d919b6b843b87abbdcd50bd",
    }
});

export async function getListCharacter(offset, query) {
    const url = `/characters`
    const response = await api.get(url, {
        params: {
            "offset": offset,
            "nameStartsWith": query
        }
    });
    const totalItems = response.data.data.total;
    const responseList = response.data.data.results;
    return {responseList, totalItems};
}

export async function getCharacterDetails(id){
    const url = `/characters/${id}`;
    const response = await api.get(url);
    return response.data.data.results[0];
}

export async function getListSeries(id, offset){
    const url = `/characters/${id}/series`;
    const response = await api.get(url, {
        params:{
            "offset": offset
        }
    });
    const totalItems = response.data.data.total;
    const responseListSeries = response.data.data.results;
    return {responseListSeries, totalItems};
}


export default api;