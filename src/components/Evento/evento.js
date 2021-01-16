import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Parallax } from "react-parallax"

import bg from "../../images/espiral.jpg"

const Evento = () => {
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
      <TextBlockWrapper id="evento">
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
          <p>
            Desenvolver vai além de ser um processo, é uma experiência. Troca,
            evolução, conhecimento e crescimento - tudo passa pelo
            desenvolvimento. Estamos atentos a todas as evoluções, por isso, a
            Develop Brasil tem um convite a todos os seus stakeholders:
          </p>
          <h3>Vamos Desenvolver?</h3>
          <div className="feat">
            <h2>Os números</h2>
            <h2>Crescentes</h2>
          </div>

          <p>
            O D BRASIL é direcionado aos inquietos que buscam sempre “algo a
            mais”. Para aqueles que acreditam que oportunidades não batem na
            porta, mas que é preciso correr atrás delas. Fomos feitos para os
            que desejam ser protagonistas da sua história e do seu legado.
          </p>
        </motion.div>
      </TextBlockWrapper>
    </>
  )
}

const ParaImage = styled.div`
  padding: 180px;

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

    &:last-child {
      text-align: right;
    }
  }
  h3 {
    max-width: 1080px;
    margin: 10px auto;
    width: 96%;
    font-weight: 500;
    color: #f00;
    text-align: center;
    font-size: 30px;
    line-height: 40px;
  }

  .feat {
    max-width: 520px;
    margin: 100px auto 36px 20%;
    width: 96%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin: 100px 0 36px;
    }
  }

  h2 {
    font-weight: 500;
    color: #f00;
    font-size: 60px;
    line-height: 60px;
    margin: 0;

    &:last-child {
      align-self: flex-end;
      color: #fff;
    }

    @media (max-width: 400px) {
      font-size: 36px;
      line-height: 1.2;
    }
  }

  @media (max-width: 768px) {
    padding: 100px 8px;
  }
`

export default Evento
