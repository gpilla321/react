import { IProduct } from "./types";


export interface IProductsService {
    getAll: () => IProduct[];
    get: (id: number) => IProduct | null;
}