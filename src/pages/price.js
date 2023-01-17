import { useLoaderData } from "react-router-dom";
import data from "../data"

const Price = (props) => {

    const stock = useLoaderData();

    return(
        <div className="price">
            <h3>
                Symbol: {stock[0].symbol}
            </h3>
            <h3>
                Price: ${stock[0].price}
            </h3>
            <h3>
                Volume: {stock[0].volume}
            </h3>
        </div>

    )
}

export default Price;