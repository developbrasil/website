import React from "react"
import styled from "styled-components"
import { Parallax } from "react-parallax"

import socialIcons from "../../constants/social-icons"

import bg from "../../images/black-bg.jpg"
import dbrasil from "../../images/d-brasil-logo.svg"

const Rodape = () => {
  return (
    <Section bgImage={bg} bgImageAlt="Develop Brsil" strength={400}>
      <Wrapper>
        <div id="contato">
          <Title>
            <h2>preparado para a</h2>
            <h2>maior imersão da sua vida?</h2>
          </Title>
          <Contact>
            <div>
              <h4>Fale com a gente</h4>
            </div>
            <div>
              <h5>(62) 98181-4731</h5>
              <h5>(62) 99907-6929</h5>
              <h5>contato@developbrasil.com.br</h5>
            </div>
            <Icons>
              <h4>siga-nos</h4>
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </Icons>
          </Contact>
          <LogoWrapper>
            <img src={dbrasil} alt="Develop Brasil" />
          </LogoWrapper>
        </div>
      </Wrapper>
    </Section>
  )
}

const Section = styled(Parallax)`
  padding: 16px;
`

const Wrapper = styled.section`
  max-width: 1080px;
  width: 96%;
  margin: 0 auto;
  padding: 80px 0;
`

const Title = styled.div`
  h2 {
    font-size: 42px;
    color: #f00;
    margin: 0;

    &:last-child {
      color: #fff;
      text-align: right;
    }
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 48px 0 64px;

  & > div:not(:last-child) {
    margin-right: 36px;
  }

  h5 {
    font-family: "HK Grotesk";
    margin: 0;
    font-size: 20px;
  }

  h4 {
    font-family: "HK Grotesk";
    text-transform: uppercase;
    font-size: 20px;
  }

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    & > div:last-child {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 680px) {
    & > div {
      width: 100%;
      text-align: center;
      margin-right: 0 !important;

      &:nth-child(2) {
        margin-bottom: 20px;
      }
    }
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;

  & > a {
    margin-left: 8px;
    color: #fff;
    font-size: 32px;
  }
`

const LogoWrapper = styled.div`
  display: block;
  max-width: 320px;
  margin: 0 auto;
  position: relative;

  &:after {
    content: "o mundo é dos inquietos";
    color: #fff;
    position: absolute;
    bottom: 0;
    white-space: nowrap;
    left: 30%;
  }
`

export default Rodape
