function formatPrice(price) {
  const newPrice = Number(price).toFixed(2);
  return `R$${newPrice}`;
}

export default formatPrice;
