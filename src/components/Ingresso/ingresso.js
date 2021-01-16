import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Parallax } from "react-parallax"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import bg from "../../images/plateia.jpg"
import dSymbol from "../../images/d-symbol.svg"

const Ingresso = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
      <TextBlockWrapper>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          id="ingressos"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        >
          <IngressoBox>
            <img src={dSymbol} alt="Develop Brasil" />
            <h2>
              Compre seu
              <br />
              ingresso aqui
            </h2>
            <a>em breve!</a>
          </IngressoBox>
        </motion.div>
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
  }
`

export default Ingresso
