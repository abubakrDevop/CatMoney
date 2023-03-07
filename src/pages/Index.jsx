import React, { useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios'
import { useParams, useNavigate } from "react-router";

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
  // width: 100%;
  // min-height: 100vh;
  // background-image: url("../assets/img/city.gif");
  // background-size: 100% 100%;
  // background-attachment: fixed;
  // overflow: hidden;

  // @media (max-width: 820px) {
  //   background-image: url("../assets/img/tablet.gif");
  // }
  // @media (max-width: 479px) {
  //   background-image: url("../assets/img");
  // }
`;

export const Index = () => {
  let navigate = useNavigate();
  const params = useParams();
  console.log('typeofParams', params?.id)

  useEffect(() => {
    localStorage.setItem("regist", JSON.stringify({ id: 11 }));
  }, []);


    const userId = JSON.parse(localStorage.getItem("regist"));

  useEffect(() => {
    if (params?.id) {
      navigate("/");
    }
  }, [params?.id])

    if (Number(params?.id) === userId?.id) {
      localStorage.setItem("userLink", params?.id);
      console.log("params", params?.id);
    }

  //   const [chatFocus, setChatFocus] = useState(true);

  //   const idUser = JSON.parse(localStorage.getItem("regist"))
  //   const DetectChatFocus = () => {
  //     useEffect(() => {
  //         const handleActivityFalse = () => {
  //             setChatFocus(false);
  //         };
  //         const handleActivityTrue = () => {
  //             setChatFocus(true);
  //         };
  //         window.addEventListener('focus', handleActivityTrue);
  //         window.addEventListener('blur', handleActivityFalse);

  //         return () => {
  //             window.removeEventListener('focus', handleActivityTrue);
  //             window.removeEventListener('blur', handleActivityFalse);
  //         };
  //     }, [chatFocus]);
  // };
  // DetectChatFocus();
  // console.log('chatFocus', chatFocus)

  // useEffect(() => {
  //   axios.post('https://088a-80-94-250-40.eu.ngrok.io/api/v2/exit',{ id: idUser.id })
  //     .then(res => console.log(res.data))
  // }, [chatFocus === false])

  // const idUser = JSON.parse(localStorage.getItem("regist"))

  // window.addEventListener('beforeunload', function(event) {
  //   // Отправляем POST запрос с помощью Axios
  //   axios.post('https://088a-80-94-250-40.eu.ngrok.io/api/v2/exit',{ id: idUser.id })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // });

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
  );
}