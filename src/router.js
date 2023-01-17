import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Main from "./pages/main"
import About from "./pages/about";
import Stocks from "./pages/stocks";
import Price from "./pages/price";
import { priceLoader } from "./loaders";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Main/>}/>
            <Route path="stocks" element={<Stocks/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="stocks/:symbol" element={<Price/>} loader={priceLoader}/>
        </Route>
    )
)

export default router