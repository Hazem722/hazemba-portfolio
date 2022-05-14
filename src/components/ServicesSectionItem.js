import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Info from './Info';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem-icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem-title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles>
      <div className="servicesItem-icon">{icon} </div>
      <div className="servicesItem-title">{title}</div>
      <Info>{description}</Info>
    </ItemStyles>
  );
}
