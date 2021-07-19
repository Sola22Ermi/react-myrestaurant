import React from 'react'
import { productData } from './data';
import {
    ProductsContainer, ProductHeading, ProductWrapper, ProductCard, ProductTitle, 
    ProductDesc, ProductPrice, ProductButton,ProductInfo, ProductImg
} from './ProductElements';

const Products = ({ heading, data }) => {

    return (
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((product, index)=> {
                    console.log("sol")
                    console.log(product.name) 
                    return (
                        <ProductCard key= {index}>
                            <ProductImg src= {product.img} alt= {product.alt}/>
                            <ProductInfo>
               
                                <ProductTitle>{ product.name}</ProductTitle>
                                <ProductDesc>{ product.desc }</ProductDesc>
                                <ProductPrice>{ product.price}</ProductPrice>
                                <ProductButton>{ product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
                    
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products;
