import { useState, useEffect } from 'react';
import config from './main.json';
//@ts-ignore
import Typed from 'typed.js';
//@ts-ignore
import parse from 'html-react-parser';
// import ejs from "ejs";
//@ts-ignore
import { CDBContainer } from 'cdbreact';
import { compileLines } from '../../util';

const getLength = () => {
    let length = 0;
    let allLines = [];
    config.body.forEach((body) => {
        length++;
        const lines = compileLines(body);
        lines.forEach((line) => {
            allLines.push(line);
        })
    })
return length > allLines.length ? length : allLines.length;
}
const getrender = (code: string) => {
    return parse(code);
    // return code;  
    }
     const getTag = (tagname: string, ops?: any) => {
    //@ts-ignore
        let prop = config[tagname];
        if(ops) {
            
    if(ops.index) prop = prop[ops.index];
    if(ops.property) prop = prop[ops.property];
        }
    return getrender(prop);
     }
    //  const getArrayElement = (tagname: string, index = 0) => {
    // return getTag(tagname, { index })
    //  }
    //  const getProperty = (tagname: string, property: string) => {
    // return getTag(tagname, { property })
    //  }
    //  const getBody = (index: number) => {
    //      return getArrayElement('body', index);
    //  }
const DevBody = ({ i, b }: any) => {
    const [value, setValue] = useState<any>(b)
    window.onbeforeunload = function (ev) {
        var e = ev || window.event;
        const stop = (msg: string) => {
            if (e) {   // For IE and Firefox
                e.returnValue = msg;
              }
              return msg;  // For Safari
        }
        if(value !== b) {
            stop(`You have unsaved changes on ${i+1} body. Are you sure you want to leave?`);
        }
      };
  return (<>
    <hr />
    <h1> Body Preview (no lines)</h1>
   <div style={{  
       width: '100%',
                            height: '100%',
                            overflow: 'auto',
                            border: '1px solid var(--fg-color)',
                            // padding: '10px',
                            // margin: '10px'
   }}>
        <p className="lead">
        {getrender(value)}
    </p>
    </div>
    <hr  style={{ margin: "1vh"}}/>
    <h1> Editor </h1>
        <textarea key={i} placeholder={"Put some text in here"}className="text-area"value={value} onChange={(e) => setValue(e.target.value)} id={`body-${i}`}>
                    </textarea>


                    <button className="btn btn-primary btn-sm" onClick={(e) => {
                        e.preventDefault();
                    //@ts-ignore
                        config.body[i] = value;
                        fetch("http://localhost:5000/?path=structures/main/main.json", {
                            
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                'Access-Control-Allow-Origin':'*'
                            },
                            body: JSON.stringify({ data: config })
                        }).then(data => {
                            console.log(data);
                        alert("Saved!")
                        })
                    }}>
Save
                    </button>
                   <br style={{ padding: '500px' }}/>
                   <h2>Preview</h2>
                   <div id="preview" style={{
                          width: '100%',
                            height: '100%',
                            overflow: 'auto',
                            border: '1px solid var(--fg-color)',
                            padding: '10px',
                            margin: '10px'
                   }}>
                   {compileLines(value).map((b, index) => {
    return (<div className="line" style={{marginTop:"-5px", marginBottom: "-10px", display: "inline-block"}} >
    {/* {index > 0 ? <hr /> : console.log("No Hr")} */}
    <p key={index} className="lead" id={`body-${i}-line-${index}`} style={{ background: `${window.location.hash === `#body-${i}-line-${index}` ? "yellow" : "var(--bg-color)"}`}}>
    {getrender(b)}
    </p>
    </div>)
})}
                   </div>
                    </>)
}
export default function MainApp() {
   /* Setting the state of the text variable to null. */
 let [text, setText] = useState<any>(null);
 /* Setting the state of the called variable to false and the
 easter variable to none. */
 
 let [called, setCalled] = useState<any>(false);
 let [easter, setEaster] = useState<any>("none");
 const [refresh, setRefresh] = useState<any>(false);
 const isDev = window.location.href.includes("?useprod") && process.env.NODE_ENV !== "production" ? false : process.env.NODE_ENV !== "production";
 console.debug(isDev, "isDev", "process.env.NODE_ENV !== \"production\"");
useEffect(() => {
    if(text && !called) {
        console.log("MainApp: called", called, text);
      new Typed(text, {
            strings: ["502-777-1111"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
          })
    setCalled(true);
    }
   setInterval(() => {
    //@ts-ignore
    setEaster(window.easterEgg ? "inline-block" : "none" )
   })
}, [setCalled, setEaster, text, called])
 console.log(`${getLength()} lines`);
  return (<>
  {/* @ts-ignore */}
  <div className="text-box" style={{ display: easter }}><h1><span id="auto-input" ref={(el) => console.log(setText(el), "rel")} onLoad={(e) => {
      console.log(e, text, "onload")
//@ts-ignore
// let typed = new Typed("#auto-input", {
//     strings: ["502", "502-777", "502-777-1111"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     loop: true,
//   })
  console.log(typed);
//   typed.start();
        }}></span></h1></div>
        <CDBContainer style={{ minHeight: `calc(100vh + ${getLength()}px)` }}>
        <h1>{getTag("title")} </h1>
        <br />
        {config.body.map((body,i) => {
            if(isDev) {
                return (<div key={i} id={"body-"+i}>
          {/* <hr /> */}
                    {/*  */}
                    <DevBody i={i} b={body} />
                
                            </div>)
            } else 
            return (<>
{i > 0 ? <hr /> : ""}
            <div key={i} id={"body-"+i} style={{
                width: '100%',
                height: '100%',
                overflow: 'auto',
                border: '3px solid var(--fg-color)',
                // padding: '10px',
                // margin: '10px'
            }}>
{compileLines(body).map((b, index) => {
    return (
    <p key={index} className="lead line" id={`body-${i}-line-${index}`} style={{ background: `${window.location.hash === `#body-${i}-line-${index}` ? "rgba(187,128,9,0.15)" : "var(--bg-color)"}`}}>
    {getrender(b)}
    </p>
    )
})}
            </div>
            </>)
        })}

{isDev ? 
<button className="btn btn-primary btn-sm" onClick={(e) => {
    e.preventDefault();
    //@ts-ignore
    config.body[config.body.length] = "Emptey";
setRefresh(!refresh)
}} > Add Body</button>
: ""}
        <hr />
        <br />
        <footer>
            <h1>Cites</h1>
            <br />
            {/* <div style={{marginLeft: "14px", textIndent: "-14px"}}>Lea, Tony. “A Brief History of Web Development.” <i>DevDojo</i>, 27 Jan. 2021, <a href="https://devdojo.com/tnylea/a-brief-history-of-web-development"> devdojo.com/tnylea/a-brief-history-of-web-development </a>.</div> */}
            {config.cites.map((cite:any) => {
                return (<div style={{marginLeft: "14px", textIndent: "-14px"}}>
                    {cite.fullname ? cite.fullname : (`${cite.lastname || "cite.lastname"}, ${cite.firstname || "cite.firstname"}`)}. "{cite.title || "cite.title"}" <i>{cite.authorName || "cite.authorName"}</i> {cite.published || "cite.published"} {" "}
                    <a href={"https://"+cite.href} target="_blank" rel="noopener noreferrer">{cite.href || "cite.href"}</a>
                    <br />
                    <br />
                </div>)
            })}
        </footer>

        </CDBContainer>
    </>)
}