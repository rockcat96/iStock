import { Link } from "react-router-dom"
import stocks from "../data";

const Stocks = (props) => {

    return (
        <div className="stocks">
            {stocks.map((stock) => {
                const {name, symbol, lastPrice, change} = stock;
                
                return(
                    
                    <Link to={`/stocks/${symbol}`}>
                        <ul>
                            <li>{name + " " + `(${symbol})`}</li>
                        </ul>
                    </Link>
                )
            })}
        </div>
    )
}

export default Stocks;