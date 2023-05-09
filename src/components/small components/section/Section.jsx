import React from "react";
import styled from 'styled-components'

const StyledSection = styled.section `
  gap: ${({gap}) => gap};
  width: ${({width}) => width};
  height: ${({height}) => height};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  display: ${({display}) => display};
  align-items: ${({align}) => align};
  overflow: ${({overflow}) => overflow};
  justify-content: ${({justify}) => justify};
  flex-direction: ${({direction}) => direction};
`

export const Section = (props) => {
  return (
    <>
      <StyledSection {...props} />
    </>
  )
}