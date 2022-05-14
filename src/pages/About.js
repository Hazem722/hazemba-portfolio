import React from 'react';
import styled from 'styled-components';
import Info from '../components/Info';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 2;
    align-self: stretch;
  }
  .right {
    flex: 3;
  }
  .about-subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about-heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about-info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .left {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about-info-items {
    margin-top: 15rem;
  }
  .about-info-item {
    margin-bottom: 10rem;
  }
  .about-info-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .about-info-item div {
    margin-left: 10px;
  }
  @media only screen and (max-width: 992px) {
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .left {
      img {
        border-radius: 50%;
      }
    }
    .about-subheading {
      font-size: 1.8rem;
      text-align: center;
    }
    .about-heading {
      font-size: 2.8rem;
      text-align: center;
    }
    .about-info-heading {
      font-size: 3rem;
    }
    .about-info-item div {
      margin-left: 0px;
    }
    .top-section div:last-of-type a {
      width: 100%;
      text-align: center;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <img src={AboutImg} alt="me" />
          </div>
          <div className="right">
            <p className="about-subheading">
              Hi, I am <span>Hazem Ben Abdallah</span>
            </p>
            <h2 className="about-heading">
              A Freelance Front-End Developer || An Ex Civil Engineering
              Technician
            </h2>
            <div className="about-info">
              <Info>
                I'm from Tunisia which is known for its golden beaches, sunny
                weather and affordable luxuries! I'm 28 years old with the
                spirit of a 19 years old. I'm currently based in Nabeul which is
                famous for its pottery, its rush mats and its flower essences!
                In my free time, I love driving and cruising aroud the cities to
                release the stress.
                <br /> <br />
                And Introducing myself as a develper, I would say that I'm
                always super passionate about learning continuously and making
                myself up to date! And that's why my clients are always relieved
                and sure that their websites will be visually pleasing and easy
                to navigate on the one hand and on the other hand they will be
                performing well for a wide range of visitors and be technically
                stable and secure.
                <br />
                <br />
              </Info>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Education</h1>
            <AboutInfoItem
              title="University"
              items={[
                'Higher Institute of Environmental Technologies, Urbanism and Construction',
              ]}
            />
            <AboutInfoItem
              title="High School"
              items={[' Nabheni / H-lif', 'Al-Ahd-Al-Jadid / Bou-Arkoub']}
            />
            <AboutInfoItem
              title="Middle School"
              items={['Hammam Chatt Middle School']}
            />
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem title="BackEnd" items={['In Progress']} />
            <AboutInfoItem title="Design" items={['Photoshop', 'Figma']} />
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Experiences</h1>

            <AboutInfoItem title="2020-" items={['Freelance web Developer']} />
            <AboutInfoItem
              title="2018-2020"
              items={['civil engineering technician']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
