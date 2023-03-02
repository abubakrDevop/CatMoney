import React from "react";
import { Counter } from "./counter/Counter";
import { Footer } from "./footer/Footer";
import { Main } from "./Main/Main";

import cls from "../components/Root.module.scss";

export const Root = () => {
  return (
    <div className={cls.root}>
      <Main />
      {/* <Counter /> */}
      <Footer />
    </div>
  );
}