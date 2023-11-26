import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 90px;
  background-color: #08120A;
  color: white;
`;

const LeftSection = styled.div`
  padding-right: 20px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content
`;

const CompanyLogo = styled.img`
  width: 40px; /* Set your desired width */
  height: auto;
  margin-right: 10px;
`;

const NavItem = styled.a`
  padding: 0 10px;
  text-decoration: none;
  color: white;
`;

const TradeButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #ff9900;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const NavbarComponent = () => {
  return (
    <Navbar>
      <LeftSection>
        <CompanyLogo src="path_to_your_logo.png" alt="Company Logo" />
        <span>Density</span>
      </LeftSection>
      <div>
        <NavItem href="#">Academy</NavItem>
        <NavItem href="#">Blogs</NavItem>
        <NavItem href="#">Leaderboard</NavItem>
        <NavItem href="#">Fees</NavItem>
      </div>
      <RightSection>
        <TradeButton>Trade Now</TradeButton>
      </RightSection>
    </Navbar>
  );
};

export default NavbarComponent;
