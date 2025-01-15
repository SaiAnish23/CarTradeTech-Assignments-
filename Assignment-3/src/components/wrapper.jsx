import React, { useEffect } from 'react'
import './wrapper.css'
import Product from './product'
import Filters from './filter'
import Sorter from './sorter'
import { useSelector, useDispatch } from 'react-redux'
import { setLoader } from '../actions/filterAction'

function Wrapper() {
    const [products, setProducts] = React.useState([])
    const filters = useSelector(state => state.filters.fuel)
    const sortingOrder = useSelector(state => state.sortDirection)
    const loading = useSelector(state => state.loading)
    console.log("loading", loading)

    // console.log("filters", filters)
    const budget = useSelector(state => state.filters.budget)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(setLoader(true))
            console.log("fetchingProducts")
            let url = "https://stg.carwale.com/api/stocks"

            let flag = false;

            if (filters.length > 0) {
                url = url + "?fuel=" + filters.join("+")
                flag = true;
            }
            if (budget.min >= 0 && budget.max < Infinity) {
                if (flag) {
                    url = url + "&budget=" + budget.min + "-" + budget.max
                } else {
                    url = url + "?budget=" + budget.min + "-" + budget.max
                }
                // console.log("budgetProducts")
            }

            console.log("url", url)

            const response = await fetch(url)
            const res = await response.json()

            const stocks = res.stocks
            console.log("stocks", stocks)

            if (sortingOrder === 'asc') {
                stocks.sort((a, b) => a.priceNumeric - b.priceNumeric)
            } else {
                stocks.sort((a, b) => b.priceNumeric - a.priceNumeric)
            }



            setProducts(stocks)
            dispatch(setLoader(false))

        }

        fetchProducts()

    }, [filters, budget, sortingOrder])

    return (
        <div
            className='container'
        >
            <div
                className='filter-container'
            >
                <Filters />
            </div>

            <div
                className='content-container'
            >
                <Sorter />
                <div
                    className='product-container'
                >
                    {
                        products.map((product, idx) => (
                            <Product key={idx} data={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wrapper