import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Chip from '@material-ui/core/Chip';

const languages = [
    'Python', 'JavaScript', 'C++', 'Java', 'React', 'x86', 'C#', 'HTML5', 'CSS3', 'Visual Basic', 'Swift','Git','AWS','Node.js','Google Cloud Platform'
]

class Resume extends React.Component {

    render() {
        if(this.props.data){
            var education = this.props.data.education.map(function(education){
                return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="dat">{education.graduated}</em></p>
            <p>{education.school === "University of Southern California" && <b>Current: </b>}
            {education.description}<br />
            {education.school === "University of Southern California"}
            {education.pastClubs}</p></div>
            })

            var work = this.props.data.work.map(function(work){
                return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
                </div>
            })
        }

        return (
            <section id="resume">
                <Bounce left>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>Professional Experience</h1>
                    </div>
                    <div className="nine columns main-col" style={{textAlign:'left'}}>
                        {work}
                    </div>
                </div>
                </Bounce>
                
                <Bounce left>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>Education</h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns" style={{textAlign:'left'}}>
                                {education}
                            </div>
                        </div>
                    </div>
                </div>
                </Bounce>

                <Bounce left>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>Technical Skills</h1>
                    </div>
                    <Bounce left>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns" style={{textAlign:'left', paddingTop:'10px', display: 'flex', flexWrap: 'wrap' }}>
                            {languages.map((language) => (
                                <Chip variant="outlined" label={language} style={{ fontSize: '14px', margin: '5px' }} />
                            ))}
                            </div>
                        </div>
                    </div>
                    </Bounce>
                </div>
                </Bounce>
            </section>
        );
    }
}

export default Resume;
