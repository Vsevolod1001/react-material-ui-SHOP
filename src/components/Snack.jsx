import { Snackbar, Alert } from '@mui/material';

export const Snack = ({ isOpen, hendleClose = Function.prototype }) => {
  return (
    <Snackbar open={isOpen} onClose={hendleClose} autoHideDuration={1000}>
      <Alert severity="success">Товар добавлен в корзину!</Alert>
    </Snackbar>
  );
};
