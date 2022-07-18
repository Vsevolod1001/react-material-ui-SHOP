import * as React from 'react';
import { Toolbar, Typography, IconButton, AppBar, Badge } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
export const Header = ({ handleCart, basketLen }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleCart}
        >
          <Badge color="secondary" badgeContent={basketLen}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
