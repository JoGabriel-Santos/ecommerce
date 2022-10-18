import PropTypes from 'prop-types';
import { Container, Img } from './styles';

function Hero({ img, children }) {
  return (
    <Container>
      <Img src={img[0]} />
      <Img src={img[1]} />
      <Img src={img[2]} />
      {children}
    </Container>
  );
}

Hero.propTypes = {
  img: PropTypes.node,
  children: PropTypes.node,
};
Hero.defaultProps = {
  img: '',
  children: null,
};

export default Hero;
