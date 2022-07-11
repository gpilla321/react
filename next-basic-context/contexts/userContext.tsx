import { createContext, useState } from "react";
import ProductService from "../services/products";
import { IUserContext } from "../types/contexts";
import { IProduct } from "../types/types";

const UserContext = createContext<IUserContext>({});

const UserProvider = ({ children }: any) => {
    const [shopCart, setShopCart] = useState<IProduct[]>([]);

    const addToCart = async (productId: number) => {
        const product = ProductService.get(productId);

        if (product) setShopCart([...shopCart, product]);
    }

    return <UserContext.Provider value={{ shopCart, addToCart }}>
        {children}
    </UserContext.Provider>
}

export { UserProvider, UserContext };