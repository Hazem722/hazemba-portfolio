import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import SectionTitle from './SectionTitle';
import Button from './Button';
import AboutImg from '../assets/images/aboutImage.png';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection-left,
  .aboutSection-right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection-left {
      flex: 4;
    }
    .aboutSection-right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection-left,
    .aboutSection-right {
      width: 100%;
    }
    .aboutSection-right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection-buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection-left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <Info>
            I am a freelance website designer and developer based in Tunisia. I
            create professional websites with love and passion! Having solid
            knowledge on Web Development And enough experience after working
            with different clients , I gained the power to help people realize
            their websites the way they imagine and even better by providing
            them with new unique ideas.
          </Info>
          <div className="aboutSection-buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection-right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
