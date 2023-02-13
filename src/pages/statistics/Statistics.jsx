import React from "react";
import { Page_404 } from "../404-page/Page_404";
import cls from '../statistics/Statistics.module.scss'

export const Statistics = () => {
  if (localStorage.getItem('registered') !== 'ok') {
    return (
      <Page_404 />
    )
  }

  return (
    <div className={cls.statistics}> 

    </div>
  )
}