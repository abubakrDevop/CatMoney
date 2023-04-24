import React from "react";
import style from 'styled-components'

const StyledButton = style.button `
  position: relative;
  width: ${({width}) => width};
  height: ${({height}) => height};
  color: ${({color}) => color || 'white'};
  padding: ${({padding}) => padding};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  overflow: hidden;
  text-decoration: none;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 5px black;
  background: ${({back}) => back || 'linear-gradient(to left, rgb(60, 0, 128), rgba(0, 89, 255, 0.5))'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    transition: .5s;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    z-index: -1;
    background: linear-gradient(to left, rgb(60, 0, 128), rgba(0, 89, 255, 0.5));
  }

  &:hover::before {
    height: 180%;
  }
`

export const Button = (props) => {
  return (
    <>
      <StyledButton {...props} />
    </>
  )
}