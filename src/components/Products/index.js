import React, { useEffect, useState } from 'react'
import { ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';

const Products = ({ heading }) => {
    // const [image, asin, title, full_link, price, rank ] = items;
    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/trending', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(promise => promise.json())
        .then(( trending ) => {        
          setDisplayItems([...trending].slice(0,3))
        })
        .catch((err) => console.error(err));
      }, [])

  return (
    <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {displayItems.map((item, index) => {
                    return (
                <ProductCard key={index}>
                    <ProductImg src={item.image} alt={item.asin}/>
                    <ProductInfo>
                        <ProductTitle>{item.title}</ProductTitle>
                        <ProductDesc>{item.full_link}</ProductDesc>
                        <ProductPrice>{item.prices.current_price}</ProductPrice>
                        <ProductButton>{item.rank}</ProductButton>
                    </ProductInfo>
                </ProductCard>
                    )
                })}
            </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products