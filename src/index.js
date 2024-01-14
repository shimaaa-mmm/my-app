import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieItem from './Components/MovieItem';
import {movies1, movies2,movies3,movies4 } from './data/movies';
import "./index.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div ><h1></h1>
<MovieItem items={movies1} listTitle="ویژه"/>
<MovieItem items={movies2}listTitle="برترین "/>
<MovieItem items={movies3}listTitle="سینمایی"/>
<MovieItem items={movies4}listTitle="سریال"/>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
