import { useState } from 'react';
import { Search } from './Search';
import { ShowcaseList } from './ShowcaseList';
import { goods } from '../components/data/goods';
import { BasketList } from './BasketList';

export const App = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [basket, setBasket] = useState([]);

  const hendleChange = e => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }
    setSearch(e.target.value);
    setProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  const addProduct = productItem => {
    let quantity = 1;

    const productIndex = basket.findIndex(item => item.id === productItem.id);

    if (productIndex > -1) {
      quantity = basket[productIndex].quantity + 1;
      setBasket(
        basket.map(item => {
          if (item.id !== productItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setBasket([
        ...basket,
        {
          id: productItem.id,
          name: productItem.name,
          price: productItem.price,
          quantity,
        },
      ]);
    }
  };
  const removeProduct = id => {
    setBasket(basket.filter(item => item.id !== id));
  };
  return (
    <div>
      <Search value={search} hendleChange={hendleChange} />
      <ShowcaseList products={products} addProduct={addProduct} />
      <BasketList basket={basket} removeProduct={removeProduct} />
    </div>
  );
};
