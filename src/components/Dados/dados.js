import React from "react"
import styled from "styled-components"
import { Parallax } from "react-parallax"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import bg from "../../images/plateia.jpg"

const Dados = () => {
  const { img1 } = useStaticQuery(
    graphql`
      query {
        img1: file(relativePath: { eq: "jovens.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

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
      <TextBlockWrapper id="dados">
        <div>
          <P>
            No período matutino, reuniremos grandes líderes e empresas
            regionais, com o intuito de fomentar a cultura local. Já no
            vespertino, iremos convidar grandes empresas nacionais para
            inspirarem e compartilharem experiências transformadoras. E, por
            último, traremos uma atração surpresa para finalizar o evento com um
            Master Class imperdível.
          </P>
        </div>
      </TextBlockWrapper>
      <ProgramacaoWrapper>
        <Programacao>
          <div className="image">
            <Img fluid={img1.childImageSharp.fluid} />
          </div>
          <div className="text">
            <H2>
              12H <span>Imersão</span>
            </H2>
            <H2>
              <span>GRANDES LÍDERES</span>
            </H2>
            <H2>
              600 <span>PESSOAS PRESENCIAIS</span>
            </H2>
            <H2>
              <span>INFINITAS PARTICIPAÇÕES ON-LINE</span>
            </H2>
            <H2>
              <span>MUITO APRENDIZADO E NETWORKING</span>
            </H2>
          </div>
        </Programacao>
      </ProgramacaoWrapper>
    </>
  )
}

const ProgramacaoWrapper = styled.div`
  background: black;
`

const Programacao = styled.div`
  max-width: 1180px;
  width: 100%;
  display: flex;
  background: black;
  color: #fff;
  margin: 0 auto;
  align-items: center;

  .text {
    width: 60%;
    padding-left: 24px;
  }

  .image {
    width: 40%;
  }

  @media (max-width: 880px) {
    display: block;
    padding: 16px;
    .text {
      width: 100%;
      margin: 20px 0;
      h2 {
        text-align: center;
        font-size: 24px;
        line-height: 32px;
      }
    }
    .image {
      width: 100%;

      .gatsby-image-wrapper {
        margin: 0 auto;
        max-width: 540px;
      }
    }
  }
`

const ParaImage = styled.div`
  padding: 260px;

  @media (max-width: 768px) {
    padding: 100px;
  }
`

const H2 = styled.h2`
  max-width: 1080px;
  margin: 10px auto 36px;
  width: 96%;
  font-weight: 500;
  color: #f00;
  font-size: 32px;
  line-height: 40px;
  margin-right: 10%;

  span {
    color: #fff;
  }
`

const P = styled.p`
  max-width: 1080px;
  width: 96%;
  margin: 0 auto;
  color: white;
  text-align: center;
  font-size: 20px;

  span {
    color: #f00;
  }
`

const TextBlockWrapper = styled.section`
  background: black;
  color: #fff;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 100px 8px;
  }
`

export default Dados
