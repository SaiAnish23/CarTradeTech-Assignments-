import React, { useEffect } from 'react'
import './product.css'
import { useSelector } from 'react-redux'


const Product = ({ data }) => {
  const loading = useSelector(state => state.loading)
  return (
    <div
    // className='product-container'
    >
      <div
        className='product'
      >

        <img src={data.imageUrl ? data.imageUrl : "https://www.brasscraft.com/wp-content/uploads/2017/01/no-image-available.png"}
          alt="product"
          className='product-image'
        />

        <div
          className='product-info'
        >
          <div
            className='product-name'
          >
            {data.carName}
          </div>

          <div
            className='product-category'
          >
            <span>
              {data.km} Km | {data.fuel} | {data.cityName}
            </span>
          </div>

          <div
            className='product-price'
          >
            Rs.{data.price}
          </div>

          <div
            className='product-button'
          >
            Get Seller Details
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product