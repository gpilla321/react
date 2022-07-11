import { Button, Col, Row } from "antd";
import Card from "antd/lib/card/Card";
import Link from "next/link";
import { IProduct } from "../../types/types";
import { IProductListProps } from "../../types/props";


const ProductList = (props: IProductListProps) => {
    const { products } = props;

    return <div className="container">
        <Row gutter={[12, 12]}>
            {products.map((product: IProduct) => {

                return <>
                    <Col span={6}>
                        <Card title={product.title}>
                            <p>
                                {product.description}
                            </p>
                            <p>
                                $ {product.price}
                            </p>
                            <Button type='primary' value='large'>
                                <Link href={'product/' + product.id}>
                                    View
                                </Link>
                            </Button>
                        </Card>
                    </Col>
                </>
            })}
        </Row>
    </div>
}

export default ProductList;