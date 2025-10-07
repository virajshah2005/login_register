import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';

const HeaderContainer = styled.header`
  height: 80px;
  background-color: rgba(107, 76, 125, 0.85);
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-family: 'Open Sans', sans-serif;
  color: white;
`;

const Logo = styled.img`
  height: 60px;
  object-fit: contain;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled.span`
  color: white;
  cursor: default;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    color: #a68cc1;
  }
`;

const InquiryButton = styled.button`
  background-color: #5BCFBE;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: default;
  font-size: 1rem;
  user-select: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>FAQs</NavLink>
        <NavLink>Gallery</NavLink>
        <NavLink>Contact Us</NavLink>
      </Nav>
      <InquiryButton>Inquiry Now</InquiryButton>
    </HeaderContainer>
  );
};

export default Header;
