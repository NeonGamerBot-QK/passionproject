/* eslint-disable jsx-a11y/anchor-is-valid */
//@ts-ignore
import config from './nav.json';
import { useState } from 'react';
import { LIGHT_THEME, DARK_THEME, NO_MUSIC, PLAY_MUSIC } from '../../constants'
//@ts-ignore
import { CDBSwitch, CDBContainer } from 'cdbreact';
/* @ts-ignore Importing the CSS file for the navbar. */
import './nav.css';
export default function Navbar() {
console.debug("Navbar called")
console.debug(config)
let style:any = {};
  const [ navBarClassName, setNavBarClassName] = useState<string>("navbar navbar-expand-lg navbar-light bg-light");
  const [musicCheck, setMusicChecked] = useState<boolean>(localStorage.getItem("music") === btoa(NO_MUSIC.toString()))
  let theme = localStorage.getItem("theme") ? atob(localStorage.getItem("theme") ?? "bGlnaHQ=") : "light";
  useState(() => {
if(process.env.NODE_ENV !== 'production')    console.debug("State called")

let theme = localStorage.getItem("theme") ? atob(localStorage.getItem("theme") ?? "bGlnaHQ=") : "light";
if(theme === LIGHT_THEME) {
setNavBarClassName("navbar navbar-expand-lg navbar-light bg-light");
} else if(theme === DARK_THEME) {
setNavBarClassName("navbar navbar-expand-lg navbar-dark bg-dark");
} else {
  console.debug("Bad theme: " + theme)
}
  })

  useState(() => {
    setMusicChecked(localStorage.getItem("music") === btoa(NO_MUSIC.toString()) ? true : localStorage.getItem("music") ===  btoa(PLAY_MUSIC.toString()) ? false : true);
  })
  
const switchTheme = (e: any) => {
  if(e.target.checked) {
    localStorage.setItem("theme", btoa(DARK_THEME));
    setNavBarClassName("navbar navbar-expand-lg navbar-dark bg-dark");
  } else {
    localStorage.setItem("theme", btoa(LIGHT_THEME));
    setNavBarClassName("navbar navbar-expand-lg navbar-light bg-light");
  }
}
    return (
        <nav className={navBarClassName as any} style={style}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{config.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {config.paths.map((path, index: number) => {
if(path.type === "link" ) {
  return (
    <>
    <li className="nav-item">
      <a className={`nav-link ${window.location.pathname === path.url ? "active" : ""}`} href={path.url}>
      {path.name}
      </a>
    </li>
    </>
  )
// } else if(path.type === "dropdown" && path.children) {
// return (
//   <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" id={"navbarDropdown-"+index.toString()} role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             {path.name}
//           </a>
//           <ul className="dropdown-menu" aria-labelledby={"navbarDropdown-" + index.toString()}>
//             {path.children?.map((child, index: number) => {
//               if(child.type === "divider") {
//                 return (<li> <hr className="dropdown-divider" /></li>)
//               } else if(child.type === "dr-link") {
//              return (<>
//              <li><a href={child.url} className="dropdown-item"> {child.name} </a></li>
//              </>)   
//               } else {
//                 return(<></>)
//               }
//             })}
//           </ul>
//         </li>
// )
}

else {
  return (<></>)
}
        })}
        {/* <li className="nav-item">

          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex={-1} aria-disabled="true">Disabled</a>
        </li> */}
        {/* <div className="center-line"></div> */}
        <div className="center-line">
    </div>
<div id="volume">
<a className="nav-link" style={{ width: "6vh", display: "inline-block"}} >
   <div> Music </div>
<input type="checkbox" name="un-mute" id="un-mute" checked={!!musicCheck} onChange={(e) => {
  if(e.target.checked) {
    localStorage.setItem("music", btoa(NO_MUSIC.toString()));
   //@ts-ignore
    window.music.mute()
    setMusicChecked(true)
  } else {
    localStorage.setItem("music", btoa(PLAY_MUSIC.toString()));
    //@ts-ignore
    window.music.unmute()
    setMusicChecked(false)
  }
}}/>
<label htmlFor="un-mute" className="unmute">
    <img src="http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg" alt="Mute_Icon.svg" title="Mute icon" style={ theme === DARK_THEME ? { filter: "invert(100%)"} : {}}/>
</label>
<label htmlFor="un-mute" className="mute">
    <img src="http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" alt="Speaker_Icon.svg" title="Unmute/speaker icon" style={ theme === DARK_THEME ? { filter: "invert(100%)"} : {}} />
</label>
</a>
</div>
{/* <br /> */}
&nbsp;&nbsp;&nbsp;&nbsp;
        <CDBContainer>
        <label htmlFor="theme-switch"> Theme {atob(localStorage.getItem("theme") as string) === DARK_THEME ? "🌕" : "☀️"} </label>
        <CDBSwitch id="theme-switch" onClick={(e : any) => switchTheme(e)} checked={atob(localStorage.getItem("theme") as string) === DARK_THEME} /> 

        </CDBContainer>

      </ul>
   
   
      <br />
      <form className="d-flex" action="/">
        <input className="form-control me-2" type="search" placeholder="Search" id="q" name="q" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}