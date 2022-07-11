import { productList } from "../mock/initialData";
import { IProductsService } from "../types/services";


const ProductService : IProductsService = {
    getAll: () => productList,
    get:(id: number) => productList.find(product => product.id === id) ?? null,
}

export default ProductService;