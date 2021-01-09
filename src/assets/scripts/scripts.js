// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('hey there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('nice to meet you.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("my name is christine.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm a student at uc berkeley (go bears!).")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm studying computer science and data science.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm also interested in design.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("fan of pineapple on pizza.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i also like to doodle.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();

    <img className="profile-pic"  src={profilepic} alt="Natalie Pham Profile Pic" />
    </div>
    <div className="nine columns main-col" style={{paddingLeft:'70px'}}>
    <h2 style={{textAlign:'left'}}>About Me</h2>

    <p style={{textAlign:'left'}}>{bio}</p>
    <div className="row" style={{textAlign:'left'}}>
          <div className="columns contact-details">
             <h2>Contact Details</h2>
             <p>
             Please Feel Free to Contact me<br></br>
             <span>{email}</span> 
             </p>
          </div>
          <div className="columns download">
             <p>
                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
             </p>

             <span class="first-color">package</span>
						<span class="fifth-color">aboutMe</span><span class="second-color">;</span>
						<br>
						<br>
						<span class="first-color">public</span>
						<span class="third-color">class</span>
						<span class="fifth-color">Christine</span>
						<span class="first-color">extends</span>
						<span class="fifth-color">humanBean</span>
						<span class="second-color">{</span>
						<br>
						<ul>
							<span class="first-color">public</span>
							<span class="fifth-color">Christine</span><!-- 
						 --><span class="second-color">() {</span>
							<br>
							<ul>
							    <span class="third-color">String</span>
							    <span class="second-color">fullName = </span>
								<span class="fourth-color">"Christine Nguyen"</span><span class="second-color">;</span>
								<br>
								<span class="third-color">String</span>
								<span class="second-color">homeTown = </span>
								<span class="fourth-color">"Garden Grove, CA"</span><span class="second-color">;</span>
								<br>
								<span class="third-color">String</span>
								<span class="second-color">school = </span>
								<span class="fourth-color">"UC Berkeley"</span><span class="second-color">;</span>
								<br>
								<span class="third-color">int</span>
								<span class="second-color">expGraduation = </span>
								<span class="fourth-color">May 2022</span><span class="second-color">;</span>
								<br>
<!-- 								<span class="third-color">String</span>
							    <span class="second-color">major = </span>
								<span class="fourth-color">"Data Science"</span><span class="second-color">;</span>
								<br> -->
								<span class="third-color">Resume</span>
								<span class="second-color">resume = </span>
								<span class="first-color">new</span>
								<span class="second-color">Resume(</span><span class="fourth-color">"</span><!-- 
								 --><span ><a href="assets/resume.pdf" class="fourth-color">pdf</a></span><!-- 
								 --><span class="fourth-color">"</span><span class="second-color">)</span><span class="second-color">;</span>
								<br>
								<span class="third-color">String[]</span>
								<span class="second-color">hobbiesAndInterests = </span>
								<span class="first-color">new </span>
								<span class="third-color">String[]</span>
								<span class="second-color">{</span>
								<br>
								<ul>
									<span class="fourth-color">"swimming"</span><span class="second-color">,</span>
									<br>
									<span class="fourth-color">"doodling"</span><span class="second-color">,</span>
									<br>
									<span class="fourth-color">"classical music"</span><span class="second-color">,</span>
									<br>
									<span class="fourth-color">"skibbl.io with friends over zoom"</span><span class="second-color">,</span>
									<br>
									<span class="fourth-color">"teaching"</span><span class="second-color">,</span>
									<br>
									<span class="fourth-color">"board games"</span>
									<br>
								</ul>
								<span class="second-color">}</span>
								<br>
							</ul>
							<span class="second-color">}</span>
							<br>
							<span class="first-color">public static</span>
							<span class="third-color">void</span>
							<span class="fifth-color">contact</span><!-- 
						 --><span class="second-color">() {</span>
						 		<ul>
						 			<span class="third-color">Email</span>
									<span class="second-color">email = </span>
									<span class="first-color">new</span>
									<span class="second-color">Email(</span><span class="fourth-color">"</span><!-- 
								 --><span ><a href="mailto:christine_nguyenl@berkeley.edu" class="fourth-color">christine_nguyenl@berkeley.edu</a></span><!-- 
								 --><span class="fourth-color">"</span><span class="second-color">)</span><span class="second-color">;</span>
								 	<br>
								 	<span class="third-color">String[]</span>
									<span class="second-color">links = </span>
									<span class="first-color">new </span>
									<span class="third-color">String[]</span>
									<span class="second-color">{</span>
									<br>
									<ul>
										<span class="fourth-color">"</span><!-- 
									--><a href="https://www.linkedin.com/in/christine-nguyenl/" class= "fourth-color" target="_blank">LinkedIn</a><!-- 
									 --><span class="fourth-color">"</span><span class="second-color">,</span>
										<br>
										<span class="fourth-color">"</span><!-- 
									--><a href="https://github.com/chrlng" class= "fourth-color" target="_blank">Github</a><!-- 
									 --><span class="fourth-color">"</span><span class="second-color">,</span>
										<br>
										<span class="fourth-color">"</span><!-- 
									--><a href="https://www.instagram.com/heyythereitschristine/?hl=en" class= "fourth-color" target="_blank">Instagram</a><!-- 
									 --><span class="fourth-color">"</span>
										 <br>
									</ul>
									<span class="second-color">}</span>
						 		</ul>
						 	<span class="second-color">}</span>
							<br>


						</ul>
						<span class="second-color">}</span>
					</div>