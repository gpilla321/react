import { Button, Card, Col, Row } from "antd";
import Link from "next/link";
import ProductActions from "../../components/product/productActions";
import ProductService from "../../services/products";
import { IProductProps, IProductServerProps } from "../../types/props"
import { IProduct } from "../../types/types";


const ProductComponent = (props: IProductProps) => {
    const { product } = props;

    if (!product)
        return <>
            <div className="container">
                <Row>
                    <Col offset={9} span={6}>
                        <h3>Product not found</h3>
                        <Button type="primary">
                            <Link href='/'>
                                Return home
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </div>
        </>

    return <>
        <div className="container">
            <Card
                title={product.title}
                actions={[<ProductActions product={product as IProduct} />]}>
                <p>{product.description}</p>
                <span>{product.price}</span>
            </Card>
        </div>
    </>
}


export const getStaticProps = async ({ params }: IProductServerProps) => {
    const productId = parseInt(params?.id.toString());
    const product = ProductService.get(productId);
    
    return { props: { product: product } }
}

export const getStaticPaths = async (params: any) => {
    return { paths: [{ params: { id: '1' } }], fallback: true }
}

export default ProductComponent