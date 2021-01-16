import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Parallax } from "react-parallax"

import bg from "../../images/graficos.jpg"
import bg2 from "../../images/maos.jpg"

const Experiencias = () => {
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
      <TextBlockWrapper id="experiencias">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        >
          <h2>D’experiências</h2>
          <p>
            O DEVELOP BRASIL é uma experiência com as maiores empresas e líderes
            do Brasil. Voaremos alto em imersões no mundo do empreendedorismo,
            com o intuito de desenvolver e expandir novos horizontes
            profissionais. Somos mais que um desejo de crescer, nascemos com o
            objetivo de provar que sim, tudo é possível, mas exige suor.
            Conectar multidões que acreditam que o empreendedorismo é descobrir
            um novo caminho para concretizar sonhos.
          </p>
        </motion.div>
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

  h2 {
    max-width: 1080px;
    margin: 10px auto 36px;
    width: 96%;
    font-weight: 500;
    color: #f00;
    font-size: 48px;
    line-height: 40px;
    margin-right: 10%;

    @media (max-width: 768px) {
      font-size: 38px;
    }
  }

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

export default Experiencias
