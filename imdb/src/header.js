import React from 'react';
import './header.css';
import imdb from './imdb.jpeg';
class Header extends React.Component{
    constructor(){
    super();
    this.state={
        headerText : "MyHeader1234",
       };
    }
    getClass = () => {
        const {headerText}=this.state;
        const headerTextLength= headerText.length;
        return headerTextLength >10 ? "class1" :"class2";
    }
    render(){
     const myclass=this.getClass();
     const {headerText}=this.state;
      return(
          <div className="mainheader">
              <div id="img">
                  <img src={imdb} alt="imdb image"/>
             </div>
            <header className={myclass}>
               {headerText}</header>
          </div>
      )
    }
}

export default Header;