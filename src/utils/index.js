//esta funcion toma todos los productos del carrito de compra tome el precio y los ume
/**
 * This function calculates total price of a new order
 * @param {Array} productos cartProducts: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (productos) => {
  let sum = 0;
  productos.forEach(product => sum += product.price)
  return sum
};
