// @ts-ignore
import React from 'react';
// @ts-ignore
import styled from "styled-components";
import Navbar from "../components/Navbar.tsx";
import Announcement from "../components/Announcement.tsx";
import Products from "../components/Products.tsx";
import NewsLetter from "../components/NewsLetter.tsx";
import Footer from "../components/Footer.tsx";
import {mobile} from "../responsive.ts";


const Container = styled.div`
    
`

const Title = styled.h1`
  margin: 20px 40px;
`

const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between"})}
`

const FilterText = styled.span`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
  ${mobile({marginRight: "0px"})}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin: "10px 0px"})}
`

const Option = styled.option`
  font-size: 20px;
  font-weight: 500;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                        <Option>Rating (asc)</Option>
                        <Option>Rating (desc)</Option>
                        <Option>Latest</Option>
                        <Option>Oldest</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;