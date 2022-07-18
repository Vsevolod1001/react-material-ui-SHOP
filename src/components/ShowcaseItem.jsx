import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
export const ShowcaseItem = props => {
  const { name, price, addProduct, poster } = props;
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          image={poster}
          alt={name}
          title={name}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Цена: {price}$
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            type="submit"
            onClick={() =>
              addProduct({
                name: props.name,
                price: props.price,
                id: props.id,
              })
            }
          >
            добавить в корзину
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
