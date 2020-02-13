import { FETCH_WEATHER } from "../actions";

// biz loginc
// src/reducers/reducer_weather.js
// action.type(FETCH_WEATHER), action.payload(weather json)

export default function(state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:

        // 데이터 추가시
        // return state.push(action.payload.data);
        // return state.concat(action.payload.data);

            return[ action.payload.data, ...state ]
        default:
            return state;
    }
    
}