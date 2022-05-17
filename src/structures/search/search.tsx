// import parse from 'html-react-parser';
import './search.css';
import bodyConfig from '../main/main.json';
// import { compileLines } from '../../util';
//@ts-ignore
import { CDBContainer } from 'cdbreact';
import parse from 'html-react-parser';

// const getrender = (code: string) => {
//     return parse(code);
//     // return code;  
//     }

const getrender = (code: string) => {
    return parse(code);
    // return code;  
    }
export default function Search({ query }: any) {
    const bodys = bodyConfig.body.map((l, index) => {
        if(l.includes(query)) return { index, body: l }
        return {};
    });
    console.log(bodys[0], "TOPS")
return (
    <div style={{ minHeight: 'calc(100vh + 100px)' }}>
    <p className="search-input">{query}</p>
    {bodys.map((bdy, i) => {
        // console.log(body)
        if(!bdy.body) return null;
        const body = bdy.body
const lines = body.split(" ").filter(l => l.includes(query));
console.log(lines)
return (<CDBContainer className="search-container">
{lines.length > 0 ? "Body " + (i+1) + " results:": ""}
<br />
{lines.map((line, lineind) => {
    // console.log(line.replace(
    //     line.split("<img")[1].split(">")[0], ""))
    console.log(line, "line")
return (
<>
<br />  
<div style={{ alignContent: "left", display: "inline-block"}}> line {lineind+1}: </div><br /><a href={`/#body-${i}-line-${lineind}`}>{getrender(line)}</a>
<br />
</>
)
})
}
<hr style={{ margin: "10vh"}}/>
</CDBContainer>)
    })
    }
    </div>
)
} 