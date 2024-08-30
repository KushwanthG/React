import LoginContextProvider from "./context/loginContextProvider";
import ProductList from './productList';

export default function Homes(){
    return (
        <LoginContextProvider>
            <ProductList/>
        </LoginContextProvider>
    )
}
