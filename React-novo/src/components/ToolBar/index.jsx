import { useState } from "react";
import DialogModal from "../Modal";
import ProductForm from "../forms/Products";

export default function ToolBar({ handleSort, handleSearch }) {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
  });

  function handleSubmit() {
    alert(newProduct);
  }

  return (
    <div className="mb-8 flex justify-between items-center py-5 px-3 border rounded-md bg-white shadow">
      <h2 className="uppercase text-2xl font-bold">Produtos</h2>
      <div className="flex gap-8 items-center">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className=" border-2 outline-none rounded-md py-1 px-2"
          type="text"
          placeholder="Pesquise aqui..."
        />
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="border-2 rounded-md py-1 px-2"
        >
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <DialogModal
          handleConfirm={handleSubmit}
          header="Novo Produto"
          titulo={"Adicionar"}
        >
          <ProductForm newProduct={newProduct} setNewProduct={setNewProduct} />
        </DialogModal>
      </div>
    </div>
  );
}
