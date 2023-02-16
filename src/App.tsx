import React from 'react';
// import logo from './logo.svg';
import './App.css';
import * as constants from './constants';
import MainApp from './structures/main/main';
import Search from './structures/search/search';
import Timeline from './structures/timeline/timeline';
const isDev = process.env.NODE_ENV !== 'production';

function App() {
  //@ts-ignore
  window.constants = constants 
React.useEffect(() => {
 if(isDev) /* only log with dev mode*/console.debug("App.tsx: useEffect called")
  const inter = setInterval(() => {
   if(isDev) /* only log with dev mode*/console.debug("Inter called")
    let theme = localStorage.getItem("theme") ? atob(localStorage.getItem("theme") ?? "bGlnaHQ=") : "light";
  if(theme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else if(theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
   if(isDev) /* only log with dev mode*/console.debug("Bad theme: " + theme)
  }
  }, 150)
return () => clearInterval(inter);
})
const querys = new URLSearchParams(window.location.search);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/text.json</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{querys.get("q") ? <Search query={querys.get("q")}/> : window.location.hash = "#/flipgrids" ? 
<div style={{ height: "100vh"}}> 
<h1>This is the flipgrids app </h1>
<div id="flipgrids" className="flipgrids" style={{ display: "flex" }}>
<iframe
    width="600"
    id="flipgrid-1"
    title="Flipgrid 1"
    height="338"
    frameBorder="0"
    src="https://flipgrid.com/s/haj7gmeBEhsA?embed=true"
    allow="microphone; camera; display-capture"></iframe>
<iframe title="Flipgrid 2"
    width="600"
    height="338"
    frameBorder="0"
    src="https://flipgrid.com/s/4cuFWqDiKXZ8?embed=true"
   /* It allows the iframe to be fullscreened. */
    // allowfullscreen
    allow="microphone; camera; display-capture"></iframe>
    <iframe
    width="600"
    title="FlipGrid 3"
    height="338"
    frameBorder="0"
    src="https://flipgrid.com/s/bb54nyeAb_ER?embed=true"
    allow="microphone; camera; display-capture"></iframe>
</div>

    
</div> : <MainApp /> ? window.location.hash == "#/timeline" ? <Timeline /> : <MainApp /> : <MainApp />}
    </div>
  );
}

export default App;
