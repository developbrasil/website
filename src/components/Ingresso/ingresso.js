import React from "react"
import styled from "styled-components"

import dSymbol from "../../images/d-symbol.svg"

const Ingresso = () => {
  return (
    <>
      <TextBlockWrapper>
        <div>
          <IngressoBox>
            <img src={dSymbol} alt="Develop Brasil" />
            <h2>
              Compre seu
              <br />
              ingresso aqui
            </h2>
            <a href="/">em breve!</a>
          </IngressoBox>
        </div>
      </TextBlockWrapper>
    </>
  )
}

const TextBlockWrapper = styled.section`
  color: black;
  background: #fff;
  padding: 120px 24px;
`

const IngressoBox = styled.div`
  max-width: 840px;
  margin: 0 auto;
  background: #000;
  border-radius: 40px;
  padding: 110px 20px 20px;
  position: relative;
  text-align: center;

  h2 {
    color: #fff;
    text-align: center;
    font-size: 40px;
  }

  img {
    width: 220px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  a {
    background: #fff;
    padding: 8px 20px;
    border-radius: 20px;
    margin: 20px 0;
    display: inline-block;
    color: #000;
    text-decoration: none;
  }
`

export default Ingresso
