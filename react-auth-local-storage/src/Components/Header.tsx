import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../logo.png';

const HeaderContainer = styled.header`
  height: 80px;
  background: linear-gradient(135deg, #6f4465 0%, #8b738b 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  font-family: 'Open Sans', sans-serif;
  color: white;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  height: 60px;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 50px;
  }

  @media (max-width: 480px) {
    height: 45px;
  }
`;

const DesktopNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.span`
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const InquiryButton = styled.button`
  background-color: #5BCFBE;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(91, 207, 190, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 2px;
  background: white;
  position: relative;
  transition: all 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: white;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${props => props.$isOpen ? '0' : '-8px'};
    opacity: ${props => props.$isOpen ? '0' : '1'};
  }

  &::after {
    bottom: ${props => props.$isOpen ? '0' : '-8px'};
    transform: ${props => props.$isOpen ? 'rotate(-90deg)' : 'rotate(0)'};
  }
`;

const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #6f4465 0%, #8b738b 100%);
    max-height: ${props => props.$isOpen ? '500px' : '0'};
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: ${props => props.$isOpen ? '0 4px 10px rgba(0, 0, 0, 0.2)' : 'none'};
    z-index: 999;
  }
`;

const MobileNavLink = styled.span`
  display: block;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 16px 24px;
  transition: all 0.3s ease;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const MobileInquiryButton = styled.button`
  width: calc(100% - 48px);
  margin: 16px 24px;
  background-color: #5BCFBE;
  border: none;
  padding: 14px 24px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 12px 20px;
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      
      {/* Desktop Navigation */}
      <DesktopNav>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>FAQs</NavLink>
        <NavLink>Gallery</NavLink>
        <NavLink>Contact Us</NavLink>
      </DesktopNav>

      {/* Desktop Inquiry Button */}
      <InquiryButton>Inquiry Now</InquiryButton>

      {/* Hamburger Menu Button */}
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        <HamburgerIcon $isOpen={isOpen} />
      </HamburgerButton>

      {/* Mobile Navigation */}
      <MobileNav $isOpen={isOpen}>
        <MobileNavLink onClick={handleLinkClick}>Home</MobileNavLink>
        <MobileNavLink onClick={handleLinkClick}>About Us</MobileNavLink>
        <MobileNavLink onClick={handleLinkClick}>Blog</MobileNavLink>
        <MobileNavLink onClick={handleLinkClick}>FAQs</MobileNavLink>
        <MobileNavLink onClick={handleLinkClick}>Gallery</MobileNavLink>
        <MobileNavLink onClick={handleLinkClick}>Contact Us</MobileNavLink>
        <MobileInquiryButton onClick={handleLinkClick}>
          Inquiry Now
        </MobileInquiryButton>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;