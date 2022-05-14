import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';
import { ExternalLinks, UtilityList } from './ProjectItemStyle';

const ProjectItemStyles = styled.div`
  .projectItem-img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem-info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    min-height: 250px;
  }
  .projectItem-title {
    font-size: 2.2rem;
  }
  .projectItem-description {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem-img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  href = '#',
  source = '#',
  visit = '#',
}) {
  return (
    <ProjectItemStyles>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="projectItem-img"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem-info">
        <Link to="#">
          <h3 className="projectItem-title">{title}</h3>
        </Link>
        <p className="projectItem-description">{description}</p>
        <UtilityList>
          <ExternalLinks href={source} target="_blank">
            Code
          </ExternalLinks>
          <ExternalLinks href={visit} target="_blank">
            Visit
          </ExternalLinks>
        </UtilityList>
      </div>
    </ProjectItemStyles>
  );
}
