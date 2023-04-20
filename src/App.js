import './App.css';
import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import GithubCard from './GithubCard';
import { Grid } from '@mui/material';


function App() {
  //useSatte用來管理UI狀態，並設定一個函數來進行變數更改
  const [offset, setOffset] = useState(0);
  function increment() {
    //若是按下next 則計數器+1，重新渲染react
    setOffset(offset + 1);
  }
  function decrement() {
    //若是按下next 則計數器-1，重新渲染react
    setOffset(offset - 1);
  }
  const handleInputChange = (event) => {

    setOffset(event.target.value);
  };

  const [data, setData] = useState([]);

  //useEffect控制元件的生命週期
  useEffect(() => {
    fetch('http://127.0.0.1:8000/repos?offset=' + offset * 10)
      .then(response => response.json())
      .then(data => console.log(setData(data)))
      .catch(error => console.error(error));
  }, [offset])
  //使用map將API傳回的資料(list)依序傳入到組件中
  return (
    <div>
      <Grid container justifyContent="left" spacing={{ xs: 2, md: 3 }}>
        {data.map((detail, index) => {
          console.log("detaildata" + index, detail)
          let id = v4()
          // if you want to put more cards in a row,
          // change the number in {} of <Grid item xs={}>
          // btw, i get rid of the width restrict
          // go check out GithubCard.js
          return (
            <Grid item xs={4}>
              <GithubCard key={id} detail={detail} />
            </Grid>
          )
        })}
      </Grid>
      <div style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
        <button onClick={decrement}>pre page</button>
        Page: {offset + 1}
        <button onClick={increment}>next page</button>
      </div>
    </div>
  );
}



export default App;
