import React from 'react';
import styled from 'styled-components';
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import FooterCol from './FooterCol';
import Info from './Info';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer-col1 {
    flex: 2;
  }
  .footer-col2,
  .footer-col3,
  .footer-col4 {
    flex: 1;
  }
  .footer-col1-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
   
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer-col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
   
  }
`;
export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer-col1">
          <h1 className="footer-col1-title">Hazem Ben Abdallah</h1>
          <Info>
            A freelance web designer and developer from Tunisia. I always make
            websites that have unique designs and also has a good performance
            rate.
          </Info>
        </div>
        <div className="footer-col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer-col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+21654906794',
                path: 'tel:+21654906794',
              },
              {
                title: 'hazemb.abdallah@gmail.com',
                path: 'mailto:hazemb.abdallah@gmail.com',
              },
              {
                title: ' Nabeul, Tunisia',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer-col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/babdallahhazem',
                icon: <AiFillFacebook size={10} />,
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/HazembAbdallah',
                icon: <AiFillTwitterSquare size={10} />,
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/hazembenabdallah/',
                icon: <AiFillLinkedin size={10} />,
              },
              {
                title: 'Github',
                path: 'https://github.com/Hazem722',
                icon: <AiFillGithub size={10} />,
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Info>© 2022 - Designed By | Hazem Ben Abdallah</Info>
        </div>
      </div>
    </FooterStyle>
  );
}
