import React from "react"
import styled from "styled-components"
import { Parallax } from "react-parallax"

import bg from "../../images/pes-na-rua.jpg"

const Numeros = () => {
  return (
    <>
      <Parallax
        bgImage={bg}
        bgImageAlt="Develop Brsil"
        strength={100}
        blur={{ min: -15, max: 15 }}
      >
        <ParaImage></ParaImage>
      </Parallax>
      <TextBlockWrapper id="evento">
        <div>
          <p>
            Em 2020, o Brasil deve atingir o maior patamar de empreendedores
            iniciais dos últimos <span>20</span> anos, com aproximadamente{" "}
            <span>25%</span> da população adulta envolvida na abertura de um
            novo negócio ou com um negócio com até <span>3,5</span> anos de
            atividade. O recorde estimado é verificado de acordo com a análise
            da série histórica da pesquisa Global Entrepreneurship Monitor
            (GEM), que aponta aumento do empreendedorismo inicial,
            principalmente em períodos de recessão, como os que ocorreram entre
            os anos <span>2008-2009</span> e entre os anos
            <span>2014-2016</span>.
          </p>
        </div>
      </TextBlockWrapper>
    </>
  )
}

const ParaImage = styled.div`
  padding: 220px;

  @media (max-width: 768px) {
    padding: 100px;
  }
`

const TextBlockWrapper = styled.section`
  background: black;
  color: #fff;
  padding: 100px 0;

  p {
    max-width: 1080px;
    width: 96%;
    margin: 0 auto;
    color: white;
    text-align: center;
    font-size: 20px;
    text-align: right;

    span {
      color: #f00;
    }
  }

  @media (max-width: 768px) {
    padding: 100px 8px;
  }
`

export default Numeros
