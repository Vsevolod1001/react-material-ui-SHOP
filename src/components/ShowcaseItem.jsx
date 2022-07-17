export const ShowcaseItem = props => {
  const { name, price, addProduct } = props;
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h5>{name}</h5>
        <p>Цена: {price}$</p>
        <button
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
        </button>
      </div>
    </div>
  );
};
