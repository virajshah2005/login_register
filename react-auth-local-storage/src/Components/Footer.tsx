import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #6f4465 0%, #8b738b 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 40px 48px;
  font-family: 'Open Sans', sans-serif;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 1024px) {
    padding: 32px 40px;
    gap: 28px;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
    gap: 24px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 24px 20px;
    gap: 20px;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 0;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Logo = styled.img`
  height: 60px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 55px;
  }

  @media (max-width: 480px) {
    height: 50px;
  }
`;

const Heading = styled.h3`
  font-family: 'Playfair Display', serif;
  margin: 0 0 16px 0;
  color: white;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-bottom: 14px;
    font-size: 17px;
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
    font-size: 16px;
  }
`;

const Text = styled.p`
  margin: 0 0 8px 0;
  color: white;
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.95;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const QuickLinks = styled.div`
  color: white;
  font-size: 14px;
  line-height: 2;
  opacity: 0.95;

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.8;
  }
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