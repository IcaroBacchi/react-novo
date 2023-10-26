import { useState, useEffect } from "react";
import Table from "../../components/Table";
import axios from "axios";
import ToolBar from "../../components/ToolBar";
import { useProducts } from "../../hooks/useProducts";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");

  const { list, remove } = useProducts();

  async function removeProduct(id) {
    const removedProduct = await remove(id);
    const newArray = products.filter(
      (product) => product.id != removedProduct.id
    );
    setProducts(newArray);
  }

  async function getAllProducts() {
    setProducts(await list(limit, sort));
  }

  function handleLimit(value) {
    const finalValue = Number(value);
    setLimit(finalValue);
  }

  function handleSearch(value) {
    setSearch(value);
  }

  function handleSort(value) {
    setSort(value);
  }

  function filterProducts() {
    const filterWord = search.toLowerCase();
    const newProducts = products.filter((product) => {
      const productTitle = product.title.toLowerCase();
      return productTitle.includes(filterWord);
    });
    setFilteredProducts(newProducts);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [limit, sort]);

  useEffect(() => {
    filterProducts();
  }, [search]);

  return (
    <>
      <ToolBar
        handleProducts={setProducts}
        handleSort={handleSort}
        handleSearch={handleSearch}
      />
      <Table
        products={search ? filteredProducts : products}
        handleLimit={handleLimit}
        deleteFunction={removeProduct}
      />
    </>
  );
}
