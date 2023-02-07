import React from "react";
import styled from 'styled-components'
import { Header } from "../components/header/Header";
import { Routes, Route } from 'react-router-dom'
import { Root } from "../components/Root";
import { Register } from "./register/Register";
import { Tasks } from "./tasks/Tasks";
import { Statistics } from "./statistics/Statistics";

const StyledMain = styled.main `
  width: 100%;
  min-height: 100vh;

  // background-image: url(https://wallpaperaccess.com/full/2641092.gif);

  background-image: url(https://wallpaperaccess.com/full/2825704.gif);

  // background-image: url(https://wallpaperaccess.com/full/8351227.gif);

  // background-image: url(https://i2.wp.com/rubberchickengames.com/wp-content/uploads/2017/04/tumblr_ol4kcqgUjy1qh8fpao1_1280-1.gif?fit=1200%2C641&ssl=1);

  // background-image: url(https://i.pinimg.com/originals/22/a5/c7/22a5c746a97687ea11af86ee8bfabe20.gif);

  // background-image: url(https://thumbs.gfycat.com/ImmaculateIlliterateAngora-size_restricted.gif);

  // background-image: url(https://thumbs.gfycat.com/ImmaculateIlliterateAngora-size_restricted.gif);

  background-size: 100% 100%;
  background-attachment: fixed;
  overflow: hidden;
  // padding: 0 80px;
` 

export const Index = () => {
  return (
    <StyledMain>
      <Header />
      <Routes>
        <Route index path="" element={<Root />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/information" element={''} />
        <Route path="/contacts" element={''} />
      </Routes>
    </StyledMain>
  )
}