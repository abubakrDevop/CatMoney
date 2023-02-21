import React from "react";
import { Counter } from "./counter/Counter";
import { Footer } from "./footer/Footer";
import { Main } from "./Main/Main";

export const Root = () => {
  return (
    <>
      <Main />
      <Counter />
      <Footer />
    </>
  )
}