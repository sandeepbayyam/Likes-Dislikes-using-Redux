import React from "react";
import "./style.css";
import Likes from './Likes.js'
import store from './store/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <div className='betterview'>
      <h1>Likes&Dislikes using Redux</h1>
      <Likes></Likes>
    </div>
    </Provider>
  );
}
