import { Button, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { IProductActionsProp } from "../../types/props";

const ProductActions = (props: IProductActionsProp) => {
    const { product } = props;
    const { addToCart } = useContext(UserContext);

    const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return <>
        <div className="product__actions">
            <span>
                Quantity: 
                <Select defaultValue={'1'}>
                    {quantity.map((number: number) => {
                        return <Option value={number.toString()} >{number}</Option>
                    })}
                    
                </Select>
            </span>
            <Button type="primary" onClick={() => addToCart!(product?.id)}> 
                Add to cart
            </Button>
        </div>
    </>
}

export default ProductActions