export default function ProductForm({ newProduct, setNewProduct }) {
  return (
    <form className="flex flex-col gap-3">
      <input
        id="title"
        type="text"
        name="title"
        value={newProduct.title}
        onChange={(e) =>
          setNewProduct((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Título do produto"
        className="outline-none py-2 px-3 rounded-x1 bg-white border"
      />
      <input
        id="description"
        type="text"
        name="description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct((prev) => ({ ...prev, description: e.target.value }))
        }
        placeholder="Descrição do produto"
        className="outline-none py-2 px-3 rounded-x1 bg-white border"
      />
      <input
        id="price"
        type="number"
        name="price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct((prev) => ({ ...prev, price: e.target.value }))
        }
        placeholder="Valor do produto"
        className="outline-none py-2 px-3 rounded-x1 bg-white border"
      />
      <select
        name="category"
        id="category"
        value={newProduct.category}
        onChange={(e) =>
          setNewProduct((prev) => ({ ...prev, category: e.target.value }))
        }
        className="outline-none py-2 px-3 rounded-x1 bg-white border"
      >
        <option value="electronics">Eletrônicos</option>
        <option value="jewelery">Joias</option>
        <option value="men's clothing">Roupas masculinas</option>
        <option value="women's clothing">Roupas femininas</option>
      </select>
    </form>
  );
}
