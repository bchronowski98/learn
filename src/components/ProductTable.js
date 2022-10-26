import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
  });

  return (
    <div>
      <h1>Product table</h1>
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
};

export default ProductTable;
