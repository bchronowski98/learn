const ListComponent = () => {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ color: product.isFruit ? "red" : "green" }}
          >
            {product.title}
          </li>
        ))}
      </ul>
      <br />
      <ul>{listItems}</ul>
    </div>
  );
};

export default ListComponent;
