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
    const [image, asin, title, full_link, price, rank ] = items;
  return (
    <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {items.map((item, index) => {
                    return (
                <ProductCard key={index}>
                    <ProductImg src={image} alt={asin}/>
                    <ProductInfo>
                        <ProductTitle>{title}</ProductTitle>
                        <ProductDesc>{full_link}</ProductDesc>
                        <ProductPrice>{price}</ProductPrice>
                        <ProductButton>{rank}</ProductButton>
                    </ProductInfo>
                </ProductCard>
                    )
                })}
            </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products