import React from "react";
import styled from 'styled-components'
import { Header } from "./header/Header";
import { Main } from "./main/Main";

const StyledIndex = styled.div `
  width: 100%;
  min-height: 100vh;
  padding: 20px 100px;
  overflow: hidden;
  background-image: url(https://wallpapercave.com/wp/wp11804657.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
`

const StyledContaier = styled.div `
  width: 100%;
  min-height: 100vh;
  border-radius: 11px;
  background: white;
`

export const Index = () => {
  return (
    <StyledIndex>
      <StyledContaier>
        <Header />
        <Main />
      </StyledContaier>
    </StyledIndex>
  )
}