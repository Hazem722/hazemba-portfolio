import React from 'react';
import styled from 'styled-components';
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import HeroImg from '../assets/images/heroImage.png';
import Button from './Button';
import Info from './Info';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero--heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero--name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero--img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero--info {
    margin-top: -18rem;
  }
  .hero--social,
  .hero--scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero--social {
    left: 50px;
  }
  .hero--scrollDown {
    right: 50px;
  }
  .hero--social--indicator,
  .hero--scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero--scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero--social--text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 1rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero--heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero--name {
        font-size: 4.5rem;
      }
    }
    .hero--img {
      height: 300px;
    }
    .hero--info {
      margin-top: 3rem;
    }
    .hero--social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero--social--indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero--social--text {
        ul {
          li {
            a {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
    .hero--scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero--heading">
            <span>Hello, This is</span>
            <span className="hero--name">Hazem Ben Abdallah</span>
          </h1>
          <div className="hero--img">
            <img src={HeroImg} alt="HeroImg" />
          </div>
          <div className="hero--info">
            <Info>
              I'm a front end web developer and I'm working as a freelancer! I
              love helping people making their own websites unique and special
            </Info>
            <Button btnLink="/projects" btnText="See my work" outline={false} />
          </div>
          <div className="hero--social">
            <div className="hero--social--indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="SocialMediaArrow" />
            </div>
            <div className="hero--social--text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/babdallahhazem"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/HazembAbdallah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterSquare size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hazembenabdallah/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Hazem722"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero--scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDownArrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
