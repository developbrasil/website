import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Parallax } from "react-parallax"

import bg from "../../images/black-bg.jpg"

import patrocinadoresFake from "../../images/patrocinadores-fake.jpg"
import fernandaNeves from "../../images/palestrantes/fernanda-neves.jpg"
import eduardoRassi from "../../images/palestrantes/eduardo-rassi.jpg"

const PALESTRANTES = [
  {
    name: "Fernanda Neves",
    picture: fernandaNeves,
    description: "Produtora de Conteúdo Digital e Gestora de Eventos",
  },
  {
    name: "Eduardo Rassi",
    picture: eduardoRassi,
    description: "Estratégia de marca e diretor criativo",
  },
]

const PATROCINADORES = [1, 2, 3, 4, 5]

const Palestrantes = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <Section bgImage={bg} bgImageAlt="Develop Brsil" strength={400}>
      <Wrapper>
        <motion.div
          style={{ padding: "16px 0" }}
          id="palestrantes"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        >
          <h2>Palestrantes</h2>
          <PalestrantesWrapper>
            {PALESTRANTES.map(palestrante => (
              <div>
                <img src={palestrante.picture} alt={palestrante.name} />
                <h3>{palestrante.name}</h3>
                <p>{palestrante.description}</p>
              </div>
            ))}
          </PalestrantesWrapper>
        </motion.div>
        <motion.div
          style={{ padding: "32px 0 16px" }}
          id="patrocinadores"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        >
          <h2>Patrocinadores</h2>
          <PatrocinadoresWrapper>
            {PATROCINADORES.map(palestrante => (
              <div>
                <img src={patrocinadoresFake} alt={palestrante.name} />
              </div>
            ))}
          </PatrocinadoresWrapper>
        </motion.div>
      </Wrapper>
    </Section>
  )
}

const Section = styled(Parallax)`
  padding: 16px;
`

const Wrapper = styled.section`
  color: #fff;
  padding: 48px 0;

  h2 {
    text-align: center;
    font-size: 48px;
    margin-bottom: 72px;

    @media (max-width: 600px) {
      font-size: 36px;
    }
  }
`

const PalestrantesWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 64px;

  & > div {
    img {
      max-width: 100%;
      border-radius: 62px;
    }

    h3 {
      font-family: "HK Grotesk", sans-serif;
      text-align: center;
      margin: 0 0 4px;
      color: #f00;
      font-weight: 700;
    }

    p {
      margin: 0;
      text-align: center;
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 56px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 48px;
  }
`

const PatrocinadoresWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 56px;

  & > div {
    img {
      max-width: 100%;
      border-radius: 62px;
    }

    h3 {
      font-family: "HK Grotesk", sans-serif;
      text-align: center;
      margin: 0;
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 48px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`
export default Palestrantes
