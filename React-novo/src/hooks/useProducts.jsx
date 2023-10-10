import axios from "axios";

export function useProducts() {
    async function list(limit, sort) {
        const response = await axios.get(
            `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`
          );
        return response.data;
    }
    return{ list };
}