import {ThunkAction} from 'redux-thunk';

export const getWeather = (city: string): ThunkAction<any, any, any, any> => {
    return async dispatch => {
        try {
            const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`);
            if(!data.ok) {
                const res: any = await data.json();
                throw new Error(res.message)
            }
            const res:any = await data.json();
            dispatch({
                type: 'GET_WEATHER',
                payload: res
            });
        } catch(error){
            dispatch({
                type: 'SET_ERROR',
                payload: error.message
            })
        }
    }
}

export const setLoading = (): any => {
    return {
        type: 'SET_LOADING'
    }
}

export const setError = (): any => {
    return{
        type: 'SET_ERROR',
        payload: ''
    }
}