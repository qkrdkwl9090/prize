import InputContainer from 'components/InputContainer';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.section`
    background-color: rgb(242,247,252);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 650px;
`
const HomePresenter = () => (
    <div>
        <MainContainer>
            <InputContainer/>
        </MainContainer>
    </div>
)
export default HomePresenter;