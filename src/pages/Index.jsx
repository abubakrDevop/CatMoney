import React from "react";
import Header from "../components/header/Header";
import { Routes, Route } from 'react-router-dom';
import { Tasks } from "./tasks/Tasks";
import { Statistics } from "./statistics/Statistics";
import { Information } from "./information/Information";
import { About } from "./about-us/About";
import { AddTask } from "./add-task/AddTask";
import { Profile } from "./profile/Profile";
import Reset from "./register/reset password/Reset";
import EmailSender from "./register/reset password/EmailSender";
import Footer from "../components/footer/Footer";
import Main from "../components/Main/Main";
import SignUpContainer from "./register/signUp/SignUpContainer";
import RegisterContainer from "./register/RegisterContainer";

export const Index = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/information" element={<Information />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/email-sender" element={<EmailSender />} />
        <Route path="/sign-up" element={<SignUpContainer />} />
      </Routes>
      <Footer />
    </>

  );
}