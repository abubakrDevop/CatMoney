import React from "react";
import styled from 'styled-components'
import { Header } from "../components/header/Header";
import { Routes, Route } from 'react-router-dom'
import { Root } from "../components/Root";
import { Register } from "./register/Register";
import { Tasks } from "./tasks/Tasks";
import { Statistics } from "./statistics/Statistics";
import { Information } from "./information/Information";
import { About } from "./about-us/About";
import { AddTask } from "./add-task/AddTask";
import { Profile } from "./profile/Profile";

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  background-image: url(./city.gif);
  background-size: 100% 100%;
  background-attachment: fixed;
  overflow: hidden;

  @media (max-width: 820px) {
    background-image: url(./tablet.gif);
  }
  @media (max-width: 479px) {
    background-image: url(./mobile5city.gif);
  }
`;

export const Index = () => {

  return (
    <StyledMain>
      <Header />
      <Routes>
        <Route index element={<Root />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/information" element={<Information />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </StyledMain>
  )
}