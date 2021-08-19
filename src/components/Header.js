import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
// import test from "assets/images/123.jpg"
const Header = styled.header`
    color:white;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:80px;
    z-index: 9;
    background:WHITE;    
    box-shadow: 0px 1px 5px 1px rgba(0,0,0, 0.2);
`;
const Inner = styled.div`
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Login = styled.div`
    width: 80px;
    height: 40px;
    text-align:center;
    background-color: #4a91e2;
    color:white;
    font-weight:bold;
    border-radius: 8px;
    font-size:14px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color:#2275d7;
    }
`;
const SLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: start;

`;
const Title = styled.div`
    color: black;
    font-weight: 700;
    font-size: 24px;
`

export default withRouter(() => (
    <Header>
        <Inner>
            <SLink to="/">
                <Title>RETRO</Title>
            </SLink>
            <SLink to="/login">
                <Login>로그인</Login>
            </SLink>
        </Inner>
    </Header>
))