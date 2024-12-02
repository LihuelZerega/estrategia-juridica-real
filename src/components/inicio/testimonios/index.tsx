"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Index() {
  return (
    <div id="testimonios" className="p-3 md:p-12 2xl:py-24 2xl:px-36">
      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Desde el primer momento en que contacté a Maricruz, su
                  atención fue excepcional. Me sentí escuchado y comprendido en
                  todo momento. Me explicó cada paso del proceso legal de manera
                  clara y sencilla, lo que me dio mucha confianza. No solo es
                  muy profesional, sino que también tiene una empatía genuina
                  por sus clientes. Estoy muy agradecido por su apoyo.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Laura Gutiérrez
                </h3>
                <span className="text-sm text-neutral-500">
                  Propietaria de un pequeño negocio | 15 - 11 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Contraté los servicios de Maricruz para resolver una disputa
                  legal relacionada con un arrendamiento, y puedo decir sin duda
                  que su enfoque fue impecable. El proceso fue rápido, eficiente
                  y, sobre todo, transparente. Cada detalle fue atendido con
                  mucha precisión y los resultados fueron favorables para mí.
                  Definitivamente recomendaría sus servicios a cualquier persona
                  que necesite asesoría jurídica.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Diego Martínez
                </h3>
                <span className="text-sm text-neutral-500">
                  Arrendador de propiedades | 10 - 10 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Tuve la oportunidad de trabajar con Maricruz en un juicio
                  sucesorio, y su nivel de profesionalismo fue impresionante.
                  Siempre fue puntual, clara en su comunicación y muy detallada
                  en cada etapa del juicio. Además, su enfoque siempre fue
                  resolver el caso de manera eficiente, minimizando cualquier
                  complicación innecesaria. Es una abogada sumamente capacitada,
                  y no dudaría en contratarla nuevamente.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Patricia López
                </h3>
                <span className="text-sm text-neutral-500">
                  Consultora financiera | 20 - 09 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Maricruz me ayudó a resolver un conflicto complicado con un
                  proveedor que parecía imposible de solucionar. Su enfoque
                  calmado y su habilidad para negociar lograron que ambas partes
                  llegáramos a un acuerdo justo. Además, siempre mantuvo una
                  comunicación constante, lo que me dio tranquilidad durante
                  todo el proceso. Su profesionalismo y experiencia marcaron la
                  diferencia.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Martín Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Comerciante independiente | 05 - 06 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Trabajar con Maricruz fue una experiencia completamente
                  positiva. Me asesoró en la elaboración de un contrato
                  importante para mi negocio y se aseguró de que todo fuera
                  claro y justo para ambas partes. Lo que más destaco es su
                  compromiso con la ética y su capacidad para explicar términos
                  legales de manera sencilla. Gracias a ella, me siento mucho
                  más segura con los acuerdos que hago.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Sofía Delgado
                </h3>
                <span className="text-sm text-neutral-500">
                  Diseñadora gráfica | 25 - 11 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:block 2xl:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Desde el primer momento en que contacté a Maricruz, su
                  atención fue excepcional. Me sentí escuchado y comprendido en
                  todo momento. Me explicó cada paso del proceso legal de manera
                  clara y sencilla, lo que me dio mucha confianza. No solo es
                  muy profesional, sino que también tiene una empatía genuina
                  por sus clientes. Estoy muy agradecido por su apoyo.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Laura Gutiérrez
                </h3>
                <span className="text-sm text-neutral-500">
                  Propietaria de un pequeño negocio | 15 - 11 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Contraté los servicios de Maricruz para resolver una disputa
                  legal relacionada con un arrendamiento, y puedo decir sin duda
                  que su enfoque fue impecable. El proceso fue rápido, eficiente
                  y, sobre todo, transparente. Cada detalle fue atendido con
                  mucha precisión y los resultados fueron favorables para mí.
                  Definitivamente recomendaría sus servicios a cualquier persona
                  que necesite asesoría jurídica.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Diego Martínez
                </h3>
                <span className="text-sm text-neutral-500">
                  Arrendador de propiedades | 10 - 10 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Tuve la oportunidad de trabajar con Maricruz en un juicio
                  sucesorio, y su nivel de profesionalismo fue impresionante.
                  Siempre fue puntual, clara en su comunicación y muy detallada
                  en cada etapa del juicio. Además, su enfoque siempre fue
                  resolver el caso de manera eficiente, minimizando cualquier
                  complicación innecesaria. Es una abogada sumamente capacitada,
                  y no dudaría en contratarla nuevamente.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Patricia López
                </h3>
                <span className="text-sm text-neutral-500">
                  Consultora financiera | 20 - 09 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Maricruz me ayudó a resolver un conflicto complicado con un
                  proveedor que parecía imposible de solucionar. Su enfoque
                  calmado y su habilidad para negociar lograron que ambas partes
                  llegáramos a un acuerdo justo. Además, siempre mantuvo una
                  comunicación constante, lo que me dio tranquilidad durante
                  todo el proceso. Su profesionalismo y experiencia marcaron la
                  diferencia.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Martín Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Comerciante independiente | 05 - 06 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Trabajar con Maricruz fue una experiencia completamente
                  positiva. Me asesoró en la elaboración de un contrato
                  importante para mi negocio y se aseguró de que todo fuera
                  claro y justo para ambas partes. Lo que más destaco es su
                  compromiso con la ética y su capacidad para explicar términos
                  legales de manera sencilla. Gracias a ella, me siento mucho
                  más segura con los acuerdos que hago.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Sofía Delgado
                </h3>
                <span className="text-sm text-neutral-500">
                  Diseñadora gráfica | 25 - 11 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden 2xl:block">
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Desde el primer momento en que contacté a Maricruz, su
                  atención fue excepcional. Me sentí escuchado y comprendido en
                  todo momento. Me explicó cada paso del proceso legal de manera
                  clara y sencilla, lo que me dio mucha confianza. No solo es
                  muy profesional, sino que también tiene una empatía genuina
                  por sus clientes. Estoy muy agradecido por su apoyo.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Laura Gutiérrez
                </h3>
                <span className="text-sm text-neutral-500">
                  Propietaria de un pequeño negocio | 15 - 11 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Contraté los servicios de Maricruz para resolver una disputa
                  legal relacionada con un arrendamiento, y puedo decir sin duda
                  que su enfoque fue impecable. El proceso fue rápido, eficiente
                  y, sobre todo, transparente. Cada detalle fue atendido con
                  mucha precisión y los resultados fueron favorables para mí.
                  Definitivamente recomendaría sus servicios a cualquier persona
                  que necesite asesoría jurídica.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Diego Martínez
                </h3>
                <span className="text-sm text-neutral-500">
                  Arrendador de propiedades | 10 - 10 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Tuve la oportunidad de trabajar con Maricruz en un juicio
                  sucesorio, y su nivel de profesionalismo fue impresionante.
                  Siempre fue puntual, clara en su comunicación y muy detallada
                  en cada etapa del juicio. Además, su enfoque siempre fue
                  resolver el caso de manera eficiente, minimizando cualquier
                  complicación innecesaria. Es una abogada sumamente capacitada,
                  y no dudaría en contratarla nuevamente.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Patricia López
                </h3>
                <span className="text-sm text-neutral-500">
                  Consultora financiera | 20 - 09 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Maricruz me ayudó a resolver un conflicto complicado con un
                  proveedor que parecía imposible de solucionar. Su enfoque
                  calmado y su habilidad para negociar lograron que ambas partes
                  llegáramos a un acuerdo justo. Además, siempre mantuvo una
                  comunicación constante, lo que me dio tranquilidad durante
                  todo el proceso. Su profesionalismo y experiencia marcaron la
                  diferencia.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Martín Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Comerciante independiente | 05 - 06 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[400px] w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[330px] w-[350px]">
                <p className="italic text-neutral-500">
                  Trabajar con Maricruz fue una experiencia completamente
                  positiva. Me asesoró en la elaboración de un contrato
                  importante para mi negocio y se aseguró de que todo fuera
                  claro y justo para ambas partes. Lo que más destaco es su
                  compromiso con la ética y su capacidad para explicar términos
                  legales de manera sencilla. Gracias a ella, me siento mucho
                  más segura con los acuerdos que hago.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Sofía Delgado
                </h3>
                <span className="text-sm text-neutral-500">
                  Diseñadora gráfica | 25 - 11 - 2024
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Index;
