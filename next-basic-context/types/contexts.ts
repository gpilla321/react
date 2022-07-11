import { IProduct } from "./types";


export interface IUserContext {
    shopCart?: IProduct[];
    addToCart?: (productId: number) => Promise<void>;
}