import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const reducer = (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...products, action.payload];

    case UPDATE:
      return products.map((products) =>
        products._id === action.payload._id ? action.payload : products
      );

    case DELETE:
      return products.filter((products) => products._id !== action.payload);

    default:
      return products;
  }
};

export default reducer;
