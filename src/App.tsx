import React from 'react';
import './App.css';
import SupportUI from './lib'
import axios  from 'axios';

function App() {
  const getData = async(string:string) => {
    if(string === '') return
    const url = `/v1/search/blog?query=${string}`
    API.get(url).then(res => console.log(res))
  }
  return <div className='App'><SupportUI.SearchInput onSearch={getData}/></div>;
}

export default App;

const API = axios.create({
  baseURL: 'https://openapi.naver.com',
  timeout: 1000 * 10,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Naver-Client-Id':process.env.REACT_APP_NAVER_CLIENT_ID, 
    'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET
  },
});