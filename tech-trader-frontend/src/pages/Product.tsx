// @ts-ignore
import React from 'react';
// @ts-ignore
import styled from "styled-components";
import Announcement from "../components/Announcement.tsx";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import NewsLetter from "../components/NewsLetter.tsx";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive.ts";


const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection: "column"})}
`
const ImgContainer = styled.div`
  flex:1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: "10px"})}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display:flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props: any)=> props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 20px;
  padding: 5px;
`

const FilterSizeOption = styled.option`
  margin-left: 10px;
  padding: 5px;
`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;
const AmountContainer = styled.div`
  display:flex;
  align-content: center;
  font-weight: 700;
  justify-content: center;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  font-weight: 500;
  border: 2px solid teal;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  background: white;
  ${mobile({margin: "0px 0px", alignItems: "center"})}
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover{
    background-color: teal;
    border-color: black;
  }
  ${mobile({margin: "10px 0px"})}
`;



const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>lorem ipsum</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam consequatur ducimus eius exercitationem fugit, iusto minus nemo? Culpa deserunt neque obcaecati placeat quam, sint vero? Accusantium enim facere nesciunt.</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={"black"}></FilterColor>
                            <FilterColor color={"darkblue"}></FilterColor>
                            <FilterColor color={"gray"}></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/>

        </Container>
    );
};

export default Product;