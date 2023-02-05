import React from "react";
import styled from 'styled-components'
import { Header } from "../components/header/Header";
import { Routes, Route } from 'react-router-dom'
import { Root } from "../components/Root";

const StyledMain = styled.main `
  width: 100%;
  min-height: 100vh;
  background-image: url(https://wallpaperaccess.com/full/5927911.gif);
  background-size: 100% 100%;
  background-attachment: fixed;
  padding: 0 80px;
` 

export const Index = () => {
  return (
    <StyledMain>
      <Header />
      <Routes>
        <Route index path="" element={<Root />} />
        <Route path="" element={''} />
      </Routes>
    </StyledMain>
  )
}