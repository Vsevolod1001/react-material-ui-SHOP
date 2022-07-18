import { Close } from '@mui/icons-material';
import { ListItem, IconButton, Typography } from '@mui/material';
export const BasketItem = ({ name, price, quantity, id, removeProduct }) => {
  return (
    <ListItem>
      <Typography variant="body1">
        {name}, {price}$ x{quantity}
      </Typography>

      <IconButton onClick={() => removeProduct(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};
