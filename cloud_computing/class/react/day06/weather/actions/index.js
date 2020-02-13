import axios from 'axios';

const API_KEY = 'APIKEY';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// redux action
// type (mandatory)
// payload (optional, data?)

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}