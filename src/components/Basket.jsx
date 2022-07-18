import { ShoppingBasket } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { BasketItem } from './BasketItem';
export const Basket = props => {
  const {
    basket = [],
    removeProduct,
    cartOpen,
    closeCart = Function.prototype,
  } = props;
  return (
    <Drawer anchor={'right'} open={cartOpen} onClose={closeCart}>
      <List sx={{ width: '300px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        {!basket.length ? (
          <ListItem>Корзина пуста!</ListItem>
        ) : (
          <>
            {basket.map(item => (
              <BasketItem
                key={item.id}
                removeProduct={removeProduct}
                {...item}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Oбщая стоимость:
                {basket.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}
                $
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};
