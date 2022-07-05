import React from 'react'
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

const Products = ({ heading, items }) => {
    // const [image, asin, title, full_link, price, rank ] = items;
  return (
    <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {items.map((item, index) => {
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