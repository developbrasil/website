import React from "react"
import styled from "styled-components"
import { Parallax } from "react-parallax"

import bg from "../../images/black-bg.jpg"
import dbrasil from "../../images/d-brasil-logo.svg"

const Hero = () => {
  return (
    <Section bgImage={bg} bgImageAlt="Develop Brsil" strength={400}>
      <div>
        <Wrapper>
          <Logo src={dbrasil} alt="Develop Brasil" />
          <Group>
            <H2>Inqueitos que</H2>
            <H2>
              Procuram o <span>algo a mais</span>
            </H2>
          </Group>
        </Wrapper>
      </div>
    </Section>
  )
}

const Section = styled(Parallax)`
  margin-top: 79px;

  @media (max-width: 991px) {
    margin-top: 70px;
  }
`

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  width: 96%;
`

const Logo = styled.img`
  width: 90%;
  max-width: 840px;
`

const Group = styled.div`
  align-self: flex-end;
  margin: 40px 10% 0 0;
`

const H2 = styled.h2`
  color: #fff;
  margin: 0;

  span {
    color: #f00;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export default Hero
