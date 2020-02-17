import axios from 'axios';

const ROOT_URL = 'https://poloniex.com/public';
const command = 'returnChartData';
const start = '1580720400';
const end = '1581573707';
const period = '86400';

export const FETCH_COIN = 'FETCH_COIN';

// https://poloniex.com/public?command=returnChartData&currencyPair=USDT_BTC&start=1580774400&end=1581573707&period=86400
// redux action
// type (mandatory)
// payload (optional, data?)

export function fetchCoin(coin) {
    const url = `${ROOT_URL}?command=${command}&currencyPair=${coin}&start=${start}&end=${end}&period=${period}`;
    const request = axios.get(url).then;
    
    return{
        type: FETCH_COIN,
        payload: request
    }
}