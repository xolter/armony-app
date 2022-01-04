import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const homeCardsElts = document.querySelectorAll('.HomeCard');
window.addEventListener('scroll', () => {
  const {scrollTop, clientHeight} = document.documentElement;
  for (let i = 0; i < homeCardsElts.length; ++i) {
    if (homeCardsElts[i]) {
      const topEltToTopViewPort = homeCardsElts[i].getBoundingClientRect().top;
      if (scrollTop > (scrollTop + topEltToTopViewPort) - clientHeight * 0.5) {
        homeCardsElts[i].classList.add('active');
      }
    }
  }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
