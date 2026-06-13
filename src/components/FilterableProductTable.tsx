import { useState } from "react";
import SearchBar from "./SearchBar";
import type { Product } from "../types";

interface FilterableProductTableProps {
  products: Product[];
}

function FilterableProductTable({ products }: FilterableProductTableProps) {
  const [searchParam, setSearchParam] = useState<string>("");
  const [inStock, setinStock] = useState<boolean>(false);

  function toggleInStock(): void {
    setinStock(!inStock);
  }

  const inStockedProducts: Product[] = products.filter(
    (p) => p.stocked == true
  );

  return (
    <div>
      <SearchBar
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        inStock={inStock}
        toggleInStock={toggleInStock}
      />
      <ProductTable
        products={inStock ? inStockedProducts : products}
        searchParam={searchParam}
      />
    </div>
  );
}

interface ProductTableProps {
  products: Product[];
  searchParam: String;
}

function ProductTable({ products, searchParam }: ProductTableProps) {
  const rows: React.ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((prod) => {
    if (prod.name.toLowerCase().indexOf(searchParam.toLowerCase()) === -1) {
      return;
    }
    if (prod.category != lastCategory) {
      rows.push(
        <ProductCategoryRow category={prod.category} key={prod.category} />
      );
    }
    rows.push(<ProductRow product={prod} />);
    lastCategory = prod.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows.length ? rows : "No items found"}</tbody>
    </table>
  );
}

function ProductRow({ product }: { product: Product }) {
  return (
    <tr>
      <td style={{ color: !product.stocked ? "red" : "black" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <>
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    </>
  );
}

export default FilterableProductTable;
