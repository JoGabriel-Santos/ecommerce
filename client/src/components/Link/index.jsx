import React from "react";

import StyledLink from "./styles";

function Link({ children }) {
  return <StyledLink href="#">{children}</StyledLink>;
}

export default Link;
