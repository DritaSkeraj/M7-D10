import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getWeather, setLoading} from '../actions/index'

const Search:any = () => {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const searchHandler = (event: any) => {
        setCity(event.currentTarget.value);
    }

    const submitHandler = (event:any) => {
        event.preventDefault();
        if(city.trim() === ''){
            window.alert('search by city name')
        }
        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type='text'
                    placeholder='search by city name'
                    value={city}
                    onChange={searchHandler}
                />
            </form>
        </div>
    )
}

export default Search;