/* eslint-disable jsx-a11y/anchor-is-valid */
import './timeline.css';
// const isDev = process.env.NODE_ENV !== 'production'; // not used so we comment
export default function Timeline() {
    return (
<>
<div className="wrapper">
    <div className="center-line">
      <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
    </div>
    <div className="row row-1">
      <section>
        <i className="icon fa-solid fa-laptop-code"></i>
        <div className="details">
          <span className="title">Start of The Internet</span>
          <span>1993</span>
        </div>
        <p>The Internet was started in this period of time & HTML was also written. <br /> They were both written by Tim Berners-Lee</p>
        <div className="bottom">
          {/* <a href="#">Read more</a> */}
        </div>
      </section>
    </div>
    <div className="row row-2">
      <section>
        <i className="icon fas fa-solid fa-laptop-code"></i>
        <div className="details">
          <span className="title">CSS was developed</span>
          <span>1994</span>
        </div>
        <p>CSS Was developed for HTML to style the documents as html was pretty bland. Cascading HTML Style Sheets (CSS) was made by: Håkon Wium Lie</p>
        <div className="bottom">
          {/* <a href="#">Read more</a> */}
        </div>
      </section>
    </div>
    <div className="row row-1">
      <section>
        <i className="icon fas fa-globe fa-spin"></i>
        <div className="details">
          <span className="title">Javascript is released</span>
          <span>1995</span>
        </div>
        <p>Javascript is released under the name Mocha and is used with HTML and CSS</p>
        <div className="bottom">
          {/* <a href="#">Read more</a>
          <i>- SpecialUser</i> */}
        </div>
      </section>
    </div>
    <div className="row row-2">
      <section>
        <i className="icon fa-solid fa-laptop-code"></i>
        <div className="details">
          <span className="title">CSS v2 and HTML4 came out</span>
          <span>1997</span>
        </div>
        <p>CSS v2 and  HTML4 came out. HTML4 is still used today on some old sites.</p>
        <div className="bottom">
          {/* <a href="#">Read more</a>
          <i>- SpecialUser</i> */}
        </div>
      </section>
    </div>
    <div className="row row-1">
      <section>
        <i className="icon fas fa-solid fa-laptop-code"></i>
        <div className="details">
          <span className="title">NodeJs was releasd</span>
          <span>May 27, 2009</span>
        </div>
        <p>The First version of nodeJS was released at <br /> Nodejs is now a popular server side application for front end apps</p>
        <div className="bottom">
          {/* <a href="#">Read more</a>
          <i>- GirlOrBoy</i> */}
        </div>
      </section>
    </div>
    <div className="row row-2">
      <section>
        <i className="icon fas fa-solid fa-laptop-code"></i>
        <div className="details">
          <span className="title">HTML5 came out</span>
          <span>2011</span>
        </div>
        <p>The latest version of HTML came out and has not been updated since.</p>
        <div className="bottom">
          {/* <a href="#">Read more</a>
          <i>- GirlOrBoy</i> */}
        </div>
      </section>
    </div>
    <div className="row row-1">
      <section>
        <i className="icon fas fa-solid fa-laptop-code"></i>
        <div className="details">
          <span className="title">ReactJS was released</span>
          <span>May 29, 2013</span>
        </div>
        <p>React.js which is now a popular nodejs front end app came out in 2013.</p>
        <div className="bottom">
          {/* <a href="#">Read more</a> */}
          {/* <i>- SpecialUser</i> */}
        </div>
      </section>
    </div>
  </div>
</>
    )
} 