import Header from '../../template/Header';
import Footer from '../../template/Footer';
import Hero from '../../components/Hero';

import {
  Container,
  Main,
  HeroSection,
  HeroDisplayMessage,
  ArrivalSection,
} from './styles';

import HeroImage1 from '../../images/HomeHeroImage_4460x4460.png';
import HeroImage2 from '../../images/HomeHeroImage2_4460x4460.png';
import HeroImage3 from '../../images/HomeHeroImage3_4460x4460.png';
import ProductCard from '../../components/ProductCard';

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <HeroSection>
          <Hero img={[HeroImage1, HeroImage2, HeroImage3]}>
            <HeroDisplayMessage>
              <div>
                <h1>Carry your Funk</h1>
                <p>Trendy handbags collection for your party animal</p>
              </div>
              <button type="button">See more</button>
            </HeroDisplayMessage>
          </Hero>
        </HeroSection>
        <ArrivalSection>
          <ProductCard />
        </ArrivalSection>
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;
