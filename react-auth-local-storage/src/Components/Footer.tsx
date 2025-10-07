import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';

const FooterContainer = styled.footer`
  background-color: #4A3656;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  font-family: 'Open Sans', sans-serif;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

const Logo = styled.img`
  height: 60px;
  object-fit: contain;
`;

const Heading = styled.h3`
  font-family: 'Playfair Display', serif;
  margin-bottom: 10px;
  color: white;
`;

const Text = styled.p`
  margin: 4px 0;
  color: white;
  font-size: 0.9rem;
`;

const QuickLinks = styled.div`
  color: white;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Column>
        <Logo src={logo} alt="Logo" />
      </Column>
      <Column>
        <Heading>OUR LOCATION</Heading>
        <Text>1234 Richmond Ct, Auburn, WA 123456, United States of America</Text>
      </Column>
      <Column>
        <Heading>CONTACT INFO</Heading>
        <Text>Phone: +91-1234567890</Text>
        <Text>Email: info@divadwedding.com</Text>
      </Column>
      <Column>
        <Heading>QUICK LINKS</Heading>
        <QuickLinks>
          About Us<br />
          Blog<br />
          FAQs<br />
          Gallery
        </QuickLinks>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
