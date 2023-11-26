import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 8px;
`;

const FooterSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h1>Density</h1>
        </div>
        <FooterLinks>
          <FooterLinkItem><a href="#">Blog</a></FooterLinkItem>
          <FooterLinkItem><a href="#">Fees</a></FooterLinkItem>
          <FooterLinkItem><a href="#">Leaderboard</a></FooterLinkItem>
          <FooterLinkItem><a href="#">Careers</a></FooterLinkItem>
          <FooterLinkItem><a href="#">Contact Us</a></FooterLinkItem>
          <FooterLinkItem><a href="#">Privacy Policy</a></FooterLinkItem>
        </FooterLinks>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, ipsum blanditiis voluptates commodi sequi repudiandae cumque beatae aperiam perspiciatis id.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, facilis!</p>
        </div>
        <FooterSocialLinks>
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://instagram.com/">Instagram</a>
          <a href="https://linkedin.com/">LinkedIn</a>
        </FooterSocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
