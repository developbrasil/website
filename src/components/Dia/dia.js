import React from "react"
import styled from "styled-components"
import { Parallax } from "react-parallax"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import bg from "../../images/plateia.jpg"

const Dia = () => {
  const { img1 } = useStaticQuery(
    graphql`
      query {
        img1: file(relativePath: { eq: "k-hotel.jpg" }) {
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
      <TextBlockWrapper id="dia">
        <div>
          <H2>
            DEVELOP <span>BRASIL "O Dia"</span>
          </H2>
          <P>
            Durante 12 horas, o DBRASIL trará para o palco cases de sucessos
            inspiradores de pessoas referências no Brasil e no mundo. Ligados
            por conhecimento, iremos promover um ecossistema de inovação, e
            preendedorismo e networking. Se prepare para conectar, aprender,
            colaborar e criar um novo mindset para conquistar os seus objetivos.
          </P>
        </div>
      </TextBlockWrapper>
      <ProgramacaoWrapper>
        <Programacao>
          <div className="text">
            <H2>Programação</H2>
            <P>
              O DEVELOP BRASIL ocorrerá no dia 21 de agosto de 2021, no K Hotel,
              localizado em Goiânia, GO. O evento terá início às 07:30 da manhã
              e fim as 19:30 tendo a disponibilidade de 600 pessoas presenciais
              e infinitas pessoas conectadas virtualmente.
            </P>
          </div>
          <div className="image">
            <Img fluid={img1.childImageSharp.fluid} />
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

  .text {
    width: 50%;
    padding: 80px 16px 16px;
  }

  .image {
    width: 50%;
  }

  @media (max-width: 880px) {
    .text {
      width: 60%;
      padding: 40px 16px 16px;
    }
    .image {
      width: 40%;
    }
  }

  @media (max-width: 880px) {
    display: block;
    .text {
      width: 100%;
      padding: 40px 16px 16px;
    }
    .image {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
      padding-bottom: 36px;
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
  font-size: 48px;
  line-height: 40px;
  margin-right: 10%;

  span {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 38px;
    margin-left: 0;
  }
`

const P = styled.p`
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
`

const TextBlockWrapper = styled.section`
  background: black;
  color: #fff;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 100px 8px 20px;
  }
`

export default Dia
