/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import { RiHeart3Line } from 'react-icons/ri';
import { FiShoppingBag } from 'react-icons/fi';

import {
  Container,
  Display,
  Info,
  Wrapper,
  Img,
  Tag,
  Title,
  Description,
  DisplayPrice,
  CartButton,
  Rating,
  Stars,
  Ratings,
} from './styles';

import formatPrice from '../utils/formatPrice';

function ProductCard({ prodInfo, options }) {
  const { imgPath, title, desc, price, prevPrice, discount } = prodInfo;
  const { hasDiscount, showButton, showRating, isTrending } = options;

  return (
    <Container opt={options}>
      <Display>
        {isTrending && <Tag>Trending</Tag>}
        <Img src={imgPath} />
      </Display>

      <Info>
        <Wrapper>
          <Title>{title}</Title>
          <RiHeart3Line size={20} />
        </Wrapper>

        <Description>{desc}</Description>

        {showRating && (
          <Rating>
            <Stars />
            <Ratings>43</Ratings>
          </Rating>
        )}

        <DisplayPrice>
          <p>{formatPrice(price)}</p>
          {hasDiscount && (
            <>
              <p>{formatPrice(prevPrice)}</p>
              <p>{discount}% OFF</p>
            </>
          )}
        </DisplayPrice>

        {showButton && (
          <CartButton>
            <FiShoppingBag size={20} />
            Add to Bag
          </CartButton>
        )}
      </Info>
    </Container>
  );
}

ProductCard.propTypes = {
  prodInfo: PropTypes.object,
  options: PropTypes.object,
};

ProductCard.defaultProps = {
  prodInfo: {
    title: 'Grande',
    desc: 'Blossom Pouch',
    price: 39.49,
    prevPrice: 0,
    discount: 0,
    imgPath: '',
  },
  options: {
    size: '',
    hasDiscount: false,
    showButton: false,
    showRating: false,
    isTrending: false,
  },
};

export default ProductCard;
