import React, { Component } from 'react';
import profilepic from '../images/profilepic.JPG';

class About extends Component {
  render() {

    if(this.props.data){
      // var profilepic= process.env.PUBLIC_URL + "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <h2 class="subtitle">about me</h2>
      <div className="row" id="img-console">
      <div id="console">
      <span class="first-color" >import </span>
      <span class="fifth-color" >aboutMe</span>
      <br></br>
      <span class="first-color" >import </span>
      <span class="fifth-color" >internships</span>
      <br></br>
      <span class="first-color" >import </span>
      <span class="fifth-color" >portfolio</span>
      <br></br>
      <br></br>
      <span class="first-color" >def </span>
      <span class="third-color ">nataliePortfolio</span>
      <span class="fifth-color" >(fullName,</span>
      <span class="first-color" > homeTown,</span>
      <span class="fifth-color"> school)</span>
      <span class="second-color">:</span>
      <br></br>
      <ul>
         <span class="first-color">def</span>
         <span class="fifth-color"> Natalie</span> 
       <span class="second-color">():</span>
         
         <ul>
             <span class="third-color">name </span>
             <span class="second-color">= </span>
            <span class="fourth-color">"Natalie Pham"</span>
            <br></br>
            <span class="third-color">homeTown</span>
            <span class="second-color"> = </span>
            <span class="fourth-color">"San Jose, CA"</span>
            <br></br>
            <span class="third-color">school</span>
            <span class="second-color"> = </span>
            <span class="fourth-color">"USC"</span>
            <br></br>
            <span class="third-color">graduationDate</span>
            <span class="second-color"> = </span>
            <span class="fourth-color">May 2023</span>
            <br></br>
            <span class="third-color">major</span>
             <span class="second-color"> = </span>
            <span class="fourth-color">"Computer Science/Computer Engineering"</span>
            <br></br>
            <span class="third-color">resume</span>
            <span class="second-color"> = </span>
            <span class="first-color"></span>
            <span class="second-color">Resume(</span><span class="fourth-color">"</span>
             <span ><a href="Natalie_Pham_Resume.pdf" class="fourth-color">natalie pham pdf</a></span>
             <span class="fourth-color">"</span><span class="second-color">)</span>
            <br></br>
            <span class="third-color">funFacts</span>
            <span class="second-color"> = </span>
            <span class="first-color"> [ </span>
            <span class="third-color"> </span>
            <br></br>
            <ul>
               <span class="fourth-color">"martial arts"</span><span class="second-color">,</span>
               <br></br>
               <span class="fourth-color">"photography"</span><span class="second-color">,</span>
               <br></br>
               <span class="fourth-color">"hiking with friends"</span><span class="second-color">,</span>
               <br></br>
               <span class="fourth-color">"buying anime merch"</span><span class="second-color">,</span>
               <br></br>
               <span class="fourth-color">"teaching young students"</span><span class="second-color">,</span>
               <br></br>
               <span class="fourth-color">"compulsively dying my hair"</span>
               
            </ul>
            <span class="first-color">]</span>
            
         </ul>
         
         <span class="first-color">def</span>
         <span class="third-color"> contact</span>
         <span class="fifth-color">()</span> 
       <span class="second-color">:</span>
             <ul>
                <span class="third-color">email</span>
               <span class="second-color"> = </span>
               <span class="second-color">Email(</span><span class="fourth-color">"</span> 
             <span ><a href="mailto:natalieqpham5@gmail.com" class="fourth-color">natalieqpham5@gmail.com</a></span>
             <span class="fourth-color">"</span><span class="second-color">)</span>
                <br></br>
                <span class="third-color">linkedin</span>
               <span class="second-color"> = </span>
               <span class="first-color"></span>
               <span class="fourth-color">"</span> 
               <a href="https://www.linkedin.com/in/nataliepham25/" class= "fourth-color" target="_blank">LinkedIn</a> 
                <span class="fourth-color">"</span>
               <br></br>
                <span class="third-color">github</span>
                <span class="second-color"> = </span>
                <span class="first-color"></span>
                <span class="fourth-color">"</span> 
                <a href="https://github.com/nataliepham25" class= "fourth-color" target="_blank">Github</a>
                <span class="fourth-color">"</span>
                <br></br>   
                <span class="third-color">instagram</span>
                <span class="second-color"> = </span>
                <span class="first-color"></span>
                <span class="fourth-color">"</span> 
                <a href="https://www.instagram.com/natalie.pham/?hl=en" class= "fourth-color" target="_blank">Instagram</a>
                <span class="fourth-color">"</span>
                <br></br>
                <span class="third-color">twitter</span>
                <span class="second-color"> = </span>
                <span class="first-color"></span>
                <span class="fourth-color">"</span> 
                <a href="https://www.twitter.com/natotodoroki" class= "fourth-color" target="_blank">Twitter</a>
                <span class="fourth-color">"</span>
               <ul>
                                    
               </ul>
              
             </ul>
      </ul>
            

          //  </div>
        //  <img className="profile-pic"  src={profilepic} alt="Natalie Pham Profile Pic" /> 
            //</div>
            
   
            
      </section>
   );
  }
}

export default About;
