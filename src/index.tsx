import React from 'react';
import ReactDOM from 'react-dom/client';
import 'globalthis/polyfill';
import './index.css';
import './color.css';
import './darkmode.css';
import './easteregg.css';
import backgroundaudio from './backgroundaudio.mp3';
import easterEgg from './easterEgg.mp3';
import Navbar from './structures/navbar/navbar';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NO_MUSIC } from './constants';

const background_music = new Audio(backgroundaudio);
background_music.loop = true;
background_music.volume = 0.5;
background_music.play();
const easterEgg_music = new Audio(easterEgg);
let keys = "";
//@ts-ignore
window.music = {
  mute: () => {
    background_music.volume = 0;
  },
  unmute: () => {
    background_music.volume = 0.5;
  }
}
if(localStorage.getItem("music") === btoa(NO_MUSIC.toString())) {
  //@ts-ignore
  window.music.mute();
} else {
  //@ts-ignore
  window.music.unmute();
}
//@ts-ignore
window.easterEgg = false;
window.addEventListener('keypress', (e)=> {
keys += e.key;
console.log(keys);
// if(e.ctrlKey && e.shiftKey && e.keyCode === 68) alert(`Keys reset ${keys = ""}`);
if(keys === "5027771111") {
  keys = "";

  //@ts-ignore
  window.easterEgg = true;

  easterEgg_music.play();
background_music.pause();
easterEgg_music.addEventListener('ended', (e) => {
  if(background_music.paused) background_music.play(); 
//@ts-ignore
  window.easterEgg = false;
})
} else if(keys === "Enter" || keys === "stop") {
  console.log(keys, "STOP")
  keys = "";
if(!easterEgg_music.paused) easterEgg_music.pause();
  easterEgg_music.currentTime = 0
if(background_music.paused) background_music.play(); 
//@ts-ignore
  window.easterEgg = false;
}
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 
root.render(
  <React.StrictMode>
 <Navbar />

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
