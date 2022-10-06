import PropTypes from 'prop-types';
import StyledLink from './styles';

function Link({ children }) {
  return <StyledLink href="#">{children}</StyledLink>;
}

Link.propTypes = {
  children: PropTypes.string,
};
Link.defaultProps = {
  children: 'link',
};

export default Link;
