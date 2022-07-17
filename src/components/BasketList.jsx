import { BasketItem } from './BasketItem';

export const BasketList = ({ basket, removeProduct }) => {
  if (!basket.length) {
    return (
      <ul>
        <li>Корзина</li>
        <li>Товара нет</li>
      </ul>
    );
  }
  return (
    <ul>
      <li>Корзина</li>
      {basket.map(item => (
        <BasketItem key={item.id} {...item} removeProduct={removeProduct} />
      ))}
      <li>
        общая стоимость:
        {basket.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)}
        $
      </li>
    </ul>
  );
};
