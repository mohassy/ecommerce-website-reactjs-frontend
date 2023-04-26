// @ts-ignore
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
// @ts-ignore
import styled from "styled-components";
import {mobile} from "../responsive.ts";


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign: "center"})}
  
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({justifyContent: "center", width: "40%"})}
`
const Input = styled.input`
  flex: 8;
  padding: 20px;
  border: none;
`
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  flex: 1;
`
const NewsLetter = () => {
    return (
        <Container>
            <Title>News Letter</Title>
            <Desc>Get timely updates from favorite products</Desc>
            <InputContainer>
                <Input placeholder={'Your email'}>
                </Input>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;