import { useState } from 'react';
import { Search } from './Search';
import { ShowcaseList } from './ShowcaseList';
import { goods } from '../components/data/goods';
import { Header } from './Header';
import { Container } from '@mui/material';
import { Basket } from './Basket';
import { Snack } from './Snack';

export const App = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [basket, setBasket] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);

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
    setIsSnackOpen(true);
  };
  const removeProduct = id => {
    setBasket(basket.filter(item => item.id !== id));
  };
  return (
    <>
      <Header
        handleCart={() => setIsCartOpen(true)}
        basketLen={basket.length}
      />
      <Container sx={{ mt: '1rem' }}>
        <Search value={search} hendleChange={hendleChange} />
        <ShowcaseList products={products} addProduct={addProduct} />
      </Container>
      <Basket
        removeProduct={removeProduct}
        basket={basket}
        cartOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
      />
      <Snack isOpen={isSnackOpen} hendleClose={() => setIsSnackOpen(false)} />
    </>
  );
};
