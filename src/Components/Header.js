import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';



class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var school = this.props.data.school;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      //var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }
    
    return (
      <header id="home" style={{backgroundColor: '#c7b297'}}>

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <div style={{backgroundColor:'#d4c9bb'}}></div>
         

         <ul id="nav" className="nav">
         <li className="current"><a  href="#home" >Home</a></li>
            <li><a  href="#about" >About</a></li>
	         <li><a href="#resume" >Resume</a></li>
            <li><a  href="#portfolio" >Projects</a></li>
            <li><a  href="#contact">Contact</a></li>
         </ul>
         
      </nav>

      <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">{name}</h1>
      <h2><Typewriter
        onInit={(typewriter) => {
        typewriter.typeString('hello there!')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('nice to meet you.')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('im a student at usc.')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString("i'm studying computer science and computer engineering.")
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('i am a freelance photographer')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('i watch anime and kdramas.')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('i also like hiking.')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('thanks for visiting!')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('hello there!')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('nice to meet you.')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('im a student at usc.')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString("i'm studying computer science and computer engineering.")
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('i am a freelance photographer')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('i watch anime and kdramas.')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('i also like hiking.')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
      typewriter.typeString('thanks for visiting!')
        .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/></h2>
          <ul className="social">
              {networks}
          </ul>
      </div>
  </div>
  <p className="scrolldown">
      <a href="#about"><i className="icon-down-circle"></i></a>
  </p>
  </header>
)

}
}
export default Header;
