<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Comercio electrónico y análisis organizacional permite al aprendiz comprender los fundamentos del internet, el comercio y los negocios electrónicos, así como su evolución y aplicación en los entornos digitales. A lo largo del proceso formativo, se analizan los productos, servicios y procesos desde la segmentación del mercado, integrando la planeación estratégica mediante la definición de misión, visión, objetivos, políticas de calidad y responsabilidad social. Además, se desarrollan habilidades para el análisis del mercado digital a través de herramientas como la matriz DOFA y el perfil competitivo (MPC), orientando la toma de decisiones estratégicas y el fortalecimiento de la competitividad organizacional.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Comercio electrónico y análisis organizacional permite al aprendiz comprender los fundamentos del internet, el comercio electrónico y los negocios electrónicos, así como su evolución y aplicación en los entornos digitales. A lo largo del proceso formativo, se analizan los productos, servicios y procesos desde la segmentación del mercado, integrando la planeación estratégica mediante la definición de misión, visión, objetivos, políticas de calidad y responsabilidad social. Además, se desarrollan habilidades para el análisis del mercado digital a través de herramientas como la matriz DOFA y el perfil competitivo (MPC), orientando la toma de decisiones estratégicas y el fortalecimiento de la competitividad organizacional.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
