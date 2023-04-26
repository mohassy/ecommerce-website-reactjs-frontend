// @ts-ignore
import React from 'react';
import Product from "./Product.tsx";
import {popularProducts} from "../data.ts";
// @ts-ignore
import styled from "styled-components";
import {mobile} from "../responsive.ts";


const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${mobile({gridTemplateColumns: "repeat(1, 1fr)"})}
  background-color: azure;
`
const Products = () => {
    return (
        <Container>
            {popularProducts.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </Container>
    );
};

export default Products;