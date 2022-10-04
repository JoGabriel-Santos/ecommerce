import {
  Container,
  FooterLinks,
  FooterSection,
  FooterSocialSection,
  FooterTitle,
} from './style';

function Footer() {
  return (
    <Container>
      <FooterSection>
        <FooterLinks>
          <FooterTitle>Shop by category</FooterTitle>
          <p>Skincare</p>
          <p>Personal Care</p>
          <p>Handbags</p>
          <p>Apparels</p>
          <p>Watches</p>
          <p>Eye Wear</p>
          <p>Jewellery</p>
        </FooterLinks>
        <FooterLinks>
          <FooterTitle>About</FooterTitle>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press</p>
        </FooterLinks>
        <FooterLinks>
          <FooterTitle>Policy</FooterTitle>
          <p>Return Policy</p>
          <p>Terms of Use</p>
          <p>Sitemap</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>EPR Compliance</p>
        </FooterLinks>
      </FooterSection>
      <FooterSocialSection>
        <i>insta</i>
        <i>insta</i>
        <i>insta</i>
      </FooterSocialSection>
    </Container>
  );
}

export default Footer;
