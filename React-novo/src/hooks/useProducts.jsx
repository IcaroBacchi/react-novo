import axios from "axios";

export function useProducts() {
    async function list(limit, sort) {
        const response = await axios.get(
            `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`
          );
        return response.data;
    }

    async function remove(id) {
        const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);

        return response.data;
    }

    return{ list, remove };
}