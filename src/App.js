import React from 'react';
import { RevealJS, Slide, H1, Image, H3 } from '@cenk1cenk2-presentations/react-reveal-base';
import HighlightPlugin from '@cenk1cenk2-presentations/react-reveal-base/dist/plugins/HighlightPlugin'
import '@cenk1cenk2-presentations/react-reveal-base/assets/plugins/styles/PrismHighlight.css'
import './styles.css'
import { Helmet } from 'react-helmet-async';

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Zurian: 7 razones para salir conmigo, la #3 te sorprenderá</title>
      </Helmet>
      <RevealJS plugins={[HighlightPlugin]} controlsLayout="bottom-right" touch progress slideNumber minScale={1.1} color="white">
        <Slide>
          <section data-background-color="#501837">
            <Image src='./assets/img1.png' height={200} />
            <H1>7 ventajas y desventajas </H1>
            <H3>de salir conmigo </H3>
          </section>

          {/* 1 */}
          <section data-background-color="#501837">
            <Image src='./assets/img2.png' height={200} />
            <H1>Ventaja #1</H1>
            <H3>Nuestros nombres se ven prrones juntos </H3>
          </section>
          <section data-background-color="#501837">
            <Image src='./assets/img3.png' height={200} />
            <H1>Desventaja</H1>
            <H3>Ninguna, la neta sí quedan chidos </H3>
          </section>

          {/* 2 */}
          <section data-background-color="#501837">
            <Image src='./assets/img6.gif' height={200} />
            <H1>Ventaja #2</H1>
            <H3>Tengo netflix y disney+</H3>
            <H3>para ver pelis juntitos </H3>
          </section>
          <section data-background-color="#501837">
            <Image src='./assets/img7.gif' height={200} />
            <H1>2</H1>
            <H1>Desventaja</H1>
            <H3>No hay nada chido que ver :c</H3>
          </section>

          {/* 3 */}
          <section data-background-color="#501837">
            <Image src='./assets/img8.gif' height={200} />
            <H1>Ventaja #3</H1>
            <H3>No suelo beber, si compramos un 24</H3>
            <H3>te lo tomas tu solita</H3>
          </section>
          <section data-background-color="#501837">
            <Image src='./assets/img9.gif' height={200} />
            <H1>Desventaja</H1>
            <H3>te vas a miar</H3>
          </section>

          {/* 4 */}
          <section data-background-color="#501837">
            <Image src='./assets/img10.gif' height={200} />
            <H1>Desventaja #4</H1>
            <H3>Subí de peso durante la pandemia</H3>
          </section>
          <section data-background-color="#501837">
            <Image src='./assets/img11.gif' height={200} />
            <H1>Ventaja</H1>
            <H3>No te va a dar frío en invierno ;)</H3>
          </section>

          {/* 5 */}
          <section data-background-color="#501837">
            <Image src='./assets/img5.png' height={200} />
            <H1>Ventaja #5</H1>
            <H3>Demuestro mi interés abiertamente</H3>
            <H3>y tengo responsabilidad afectiva </H3>
          </section>
          <section data-background-color="#501837">
            <Image src='./assets/img4.png' height={200} />
            <H1>Desventaja</H1>
            <H3>estoy bien puñetas</H3>
          </section>


          {/* 6 */}
          <section data-background-color="#501837">
            <Image src='./assets/img13.gif' height={200} />
            <H1>Ventaja #6</H1>
            <H3>Cocino prron</H3>
          </section>
          <section data-background-color="#501837">
            <Image src='./assets/img14.gif' height={200} />
            <H1>Desventaja</H1>
            <H3>Prefiero comprar comida hecha :c</H3>
          </section>

          {/* 7 */}
          <section data-background-color="#501837">
            <Image src='./assets/img12.png' height={200} />
            <H1>Ventaja #7</H1>
            <H3>Si salimos y no hay química</H3>
            <H3>al menos ya tienes un nuevo amigo</H3>
          </section>
          <section data-background-color="#501837">
            <Image src='./assets/img15.gif' height={200} />
            <H1>Desventaja</H1>
            <H3>Ninguna, es un ganar-ganar</H3>
          </section>

          {/* final */}
          <section data-background-color="#501837">
            <Image src='./assets/img16.gif' height={200} />
            <H1>¿A qué hora paso por ti?</H1>
            <a
              href="https://calendly.com/zurian/comida"
              style={{
                color: 'white'
              }}
            >
              Agendar cita aquí
            </a>
          </section>

        </Slide>
      </RevealJS>
    </>
  )
}