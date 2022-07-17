import { ShowcaseItem } from './ShowcaseItem';

export const ShowcaseList = ({ products, addProduct }) => {
  return (
    <div>
      {products.map(item => (
        <ShowcaseItem key={item.id} addProduct={addProduct} {...item} />
      ))}
    </div>
  );
};
