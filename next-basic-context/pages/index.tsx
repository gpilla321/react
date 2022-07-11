import ProductList from "../components/shared/productList"
import { productList } from "../mock/initialData"
import { IProduct } from "../types/types"

const Home = () => {

    return <>
        <ProductList products={productList} />
    </>
}

export default Home
