import { IProduct } from "./types";


export interface IProductListProps {
    products: IProduct[];
}

export interface IProductProps {
    productId: number;
}

export interface IProductServerProps {
    params: IParamId;
}

export interface IProductProps {
    product: IProduct;
}

export interface IParamId {
    id: number;
}

export interface IProductActionsProp {
    product: IProduct;
}