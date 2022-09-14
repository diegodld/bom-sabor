import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Swiper as SwiperInterface,
} from "swiper";

import smartphone from "../../assets/ilustrations/smartphone.svg";
import bike from "../../assets/ilustrations/bike.svg";
import books from "../../assets/ilustrations/books.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IonButton, IonContent, IonToolbar } from "@ionic/react";
import Slider from "../../components/slides/Slider";

type Props = {};

const Onboarding: React.FC = (props: Props) => {
  SwiperCore.use([Navigation]);
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperInterface>();

  // Now you can use all slider methods like

  function handleSwiper() {
    if (swiperInstance?.isEnd) {
      return (window.location.href = "/login");
    } else {
      return swiperInstance?.slideNext();
    }
  }

  return (
    <IonContent
      fullscreen
      className="ion-justify-content-center ion-align-items-center ion-padding"
    >
      <IonToolbar />
      <div className="container">
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Slider
              title="Salgados Deliciosos!"
              img={smartphone}
              alt="smartphone"
              description="Aqui você encontra coxinhas, pastéis, batatas fritas e muito mais!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title="Entrega rápida e segura!"
              img={bike}
              alt="mulher na motocicleta"
              description="Você recebe de onde estiver, sem precisar sair de casa."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title="Aprenda de onde estiver!"
              img={books}
              alt="mulher estudando em frente à uma pilha de livros"
              description="Tenha acesso à diversos online para alavancar sua formação."
            />
          </SwiperSlide>
        </Swiper>

        <IonButton
          style={{ marginTop: "1.1rem" }}
          expand="block"
          onClick={handleSwiper}
        >
          Continuar
        </IonButton>
      </div>
    </IonContent>
  );
};

export default Onboarding;
