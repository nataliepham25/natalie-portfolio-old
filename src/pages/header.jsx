import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../imports/media";
const { mobile, notMobile } = mediaQueries;

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 5em;
  padding-top: 5em;
  ${mobile} {
    flex-direction: column;
  }
`;

const Image = styled("img")`
  width: 30%;
`;

const Heading = styled("div")`
  font-size: 4em;
  font-weight: 700;
  font-family: 'Manrope', sans-serif;
  color: black;
  padding-bottom: 1vh;
  ${mobile} {
    font-size: 1.75em;
    padding-bottom: 1.5vh;
  }
`;

const SubHeading = styled("div")`
font-size: 2.5em;
font-weight: 600;
font-family: 'Manrope', sans-serif;
color: #E88582;
padding-bottom: 2vh;
`;

const AboutMe = styled("div")`
  font-size: 1em;
  font-family: "Open Sans", sans-serif;
  color: black;
  padding-bottom: 0.75em;
`;

const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 35%;
`;
export default class Landing extends React.Component {
  render() {
    return (
      <Container>
      <Image src={process.env.PUBLIC_URL + '/profilepic.JPG'} /> 
        <TextContainer>
          <Heading>Natalie Pham</Heading>
          <SubHeading>Software Engineer. Photographer. Student</SubHeading>
          <AboutMe>I'm a second-year computer science student at USC. I'm interested in Cloud Computing, UI/UX Design and Network Security.</AboutMe>
          <AboutMe>In my free time I enjoy photography, anime, and exercising.</AboutMe>
          <AboutMe>Please feel free to contact me about anything :)</AboutMe>
        </TextContainer>
      </Container>
    );
  }
}