import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FiMapPin } from 'react-icons/fi';

import Link from '../../components/Link';

import {
  Container,
  FooterCopy,
  FooterLinks,
  FooterSection,
  FooterSocialBtn,
  FooterSocials,
  FooterSocialSection,
  FooterTitle,
  LinkWrapper,
} from './style';

function Footer() {
  return (
    <Container>
      <FooterSection>
        <FooterLinks>
          <FooterTitle>Shop by category</FooterTitle>
          <LinkWrapper>
            <Link href="#index">Skincare</Link>
            <Link href="#index">Personal Care</Link>
            <Link href="#index">Handbags</Link>
            <Link href="#index">Apparels</Link>
            <Link href="#index">Watches</Link>
            <Link href="#index">Eye Wear</Link>
            <Link href="#index">Jewellery</Link>
          </LinkWrapper>
        </FooterLinks>

        <FooterLinks>
          <FooterTitle>About</FooterTitle>
          <LinkWrapper>
            <Link href="#index">Contact Us</Link>
            <Link href="#index">About Us</Link>
            <Link href="#index">Careers</Link>
            <Link href="#index">Press</Link>
          </LinkWrapper>
        </FooterLinks>

        <FooterLinks>
          <FooterTitle>Policy</FooterTitle>
          <LinkWrapper>
            <Link href="#index">Return Policy</Link>
            <Link href="#index">Terms of Use</Link>
            <Link href="#index">Sitemap</Link>
            <Link href="#index">Security</Link>
            <Link href="#index">Privacy</Link>
            <Link href="#index">EPR Compliance</Link>
          </LinkWrapper>
        </FooterLinks>
      </FooterSection>

      <FooterSocialSection>
        <FooterSocials>
          <FooterSocialBtn type="button">
            <FaFacebookF />
          </FooterSocialBtn>

          <FooterSocialBtn type="button">
            <RiInstagramFill />
          </FooterSocialBtn>

          <FooterSocialBtn type="button">
            <FaTwitter />
          </FooterSocialBtn>

          <FooterSocialBtn type="button">
            <FaYoutube />
          </FooterSocialBtn>
        </FooterSocials>
        <FooterCopy>
          <div>
            <FiMapPin />
            <p>United States</p>
          </div>
          <p>© 2021 | Cora Leviene All Rights Reserved</p>
        </FooterCopy>
      </FooterSocialSection>
    </Container>
  );
}

export default Footer;
