import React from "react"
import Layout from "../components/layout"

import Evento from "../components/Evento/evento"
import Numeros from "../components/Numeros/numeros"
import Experiencias from "../components/Experiencias/experiencias"
import Dia from "../components/Dia/dia"
import Dados from "../components/Dados/dados"
import Palestrantes from "../components/Palestrantes/palestrantes"
import Ingresso from "../components/Ingresso/ingresso"
import Rodape from "../components/Rodape/rodape"
import Hero from "../components/Hero/hero"

export default () => (
  <>
    <Layout>
      <Hero />
      <Evento />
      <Numeros />
      <Experiencias />
      <Dia />
      <Dados />
      <Palestrantes />
      <Ingresso />
      <Rodape />
    </Layout>
  </>
)
