import Axios from "../lib/axios";

class ProductController {
  async getCategories(setCategories) {
    try {
      const response = await Axios.get("/categories");
      setCategories(response.data.data);
    } catch (error) {
      console.error(error);
      throw error; // Anda bisa memilih untuk melempar kembali error untuk ditangani di tempat lain
    }
  }

  async getProducts(setProducts) {
    try {
      const response = await Axios.get("/products");
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPending(setPending) {
    try {
      const response = await Axios.get("/transactions/pending");
      setPending(response.data.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new ProductController();
