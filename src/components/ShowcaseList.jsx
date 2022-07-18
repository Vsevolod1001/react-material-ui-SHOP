import Grid from '@mui/material/Grid';
import { ShowcaseItem } from './ShowcaseItem';

export const ShowcaseList = ({ products, addProduct }) => {
  return (
    <Grid container spacing={2}>
      {products.map(item => (
        <ShowcaseItem key={item.id} addProduct={addProduct} {...item} />
      ))}
    </Grid>
  );
};
