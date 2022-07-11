import { Badge, Menu } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const HeaderComponent = () => {
    const { shopCart } = useContext(UserContext);

    return <>
        <header>
            <Menu mode="horizontal">
                <Menu.Item key={1}>
                    <Link href='/'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key={2}>
                    Products
                </Menu.Item>
                <Menu.Item key={3} icon={<ShoppingCartOutlined />}>
                    <Badge count={shopCart?.length} size='small'>
                        Shop Cart
                    </Badge>
                </Menu.Item>
            </Menu>
        </header>
    </>;
}

export default HeaderComponent;