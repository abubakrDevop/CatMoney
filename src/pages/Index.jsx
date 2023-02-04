import React from "react";
import styled from 'styled-components'
import { Header } from "../components/header/Header";
import { Routes, Route } from 'react-router-dom'
import { Main } from "../components/Main/Main";

const StyledMain = styled.main `
  width: 100%;
  min-height: 100vh;
  background-image: url(https://wallpaperaccess.com/full/5927911.gif);
  padding: 0 80px;
` 

export const Index = () => {
  return (
    <StyledMain>
      <Header />
      <Routes>
        <Route index path="" element={<Main />} />
      </Routes>
    </StyledMain>
  )
}