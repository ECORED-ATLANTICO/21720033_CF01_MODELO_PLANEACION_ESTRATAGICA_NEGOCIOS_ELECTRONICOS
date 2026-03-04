<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .bg_img_1.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid") 
        .col-12.col-lg-9
          p.mb-3(data-aos="zoom-in-right") Los negocios electrónicos constituyen un eje fundamental en el desarrollo de las estrategias empresariales actuales, ya que permiten integrar el uso de internet y las tecnologías digitales para optimizar procesos comerciales, administrativos y operativos. A través de estos entornos digitales, las organizaciones amplían su alcance de mercado, mejoran la experiencia del cliente y fortalecen su competitividad.
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10
                  p.cita-decorada__texto.mb-2.p-3 Este componente formativo tiene como propósito que el aprendiz comprenda los fundamentos del internet, el comercio y los negocios electrónicos, así como su evolución e impacto en la gestión empresarial. De igual manera, se aborda la planeación estratégica como herramienta clave para orientar la toma de decisiones, definiendo elementos como misión, visión, objetivos, políticas de calidad y responsabilidad social.
                .col-2.col-lg-2.d-none.d-lg-block 
                  figure
                    img(src='@/assets/curso/introduccion/img_4.svg', class="cita-decorada__imagen-flotante-1")
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/introduccion/img_5.svg', class="img-fluid p-3")
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 A lo largo del desarrollo temático, el aprendiz podrá analizar el mercado mediante herramientas estratégicas como la matriz DOFA y la Matriz de Perfil Competitivo (MPC), identificando fortalezas, debilidades, oportunidades y amenazas. Esto permitirá formular estrategias coherentes, alineadas con el entorno digital y orientadas a mejorar el desempeño y la sostenibilidad de los negocios electrónicos.
      
      figure.mb-5
        .video.mb-2
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
