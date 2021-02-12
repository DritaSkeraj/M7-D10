import React from 'react';
import './App.css';

import {useDispatch, useSelector} from 'react-redux'
import state from './store/index'
import Search from './components/Search';
import ShowWeather from './components/ShowWeather';
import {setError} from './actions/index'

function App() {

  const dispatch = useDispatch();
  const weatherData = useSelector((state: any) => state.weather.data);
  const loading = useSelector((state: any) => state.weather.loading);
  const error = useSelector((state: any) => state.weather.error);

  return (
    <div className="App">
      <Search />
      {loading ? <h6>loading...</h6> : weatherData && <ShowWeather data={weatherData} />}
      {error && <p style={{'color': 'red'}}>{error}
      </p>}
    </div>
  );
}

export default App;
