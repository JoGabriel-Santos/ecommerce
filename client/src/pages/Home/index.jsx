import Header from '../../template/Header';
import Footer from '../../template/Footer';
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';

import {
  Container,
  Main,
  HeroSection,
  HeroDisplayMessage,
  ArrivalSection,
  ArrivalProducts,
} from './styles';

import HeroImage1 from '../../images/HomeHeroImage_4460x4460.png';
import HeroImage2 from '../../images/HomeHeroImage2_4460x4460.png';
import HeroImage3 from '../../images/HomeHeroImage3_4460x4460.png';

// Temporary
import ProductImage1 from '../../images/ProductImage.png';

const prod = {
  title: 'Grande',
  desc: 'Blossom Pouch',
  price: 39.49,
  prevPrice: 78.5,
  discount: 50,
  imgPath: ProductImage1,
};

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
          <div>
            <h2> New Arrivals</h2>
            <a href="#index">View all</a>
          </div>
          <ArrivalProducts>
            <ProductCard prodInfo={prod} />
            <ProductCard prodInfo={prod} />
            <ProductCard prodInfo={prod} />
            <ProductCard prodInfo={prod} />
          </ArrivalProducts>
        </ArrivalSection>
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;
