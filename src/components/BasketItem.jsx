export const BasketItem = ({ name, price, quantity, id, removeProduct }) => {
  return (
    <li>
      {name}, {price}$ x{quantity}
      <button onClick={() => removeProduct(id)}>удалить</button>
    </li>
  );
};
