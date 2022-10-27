import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import "./ProductTable.css";

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;

  console.log(products);

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  console.log(rows);

  return (
    <table className="center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
