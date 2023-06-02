import React, { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "./styles.css";

register();

function Carousel({ items, component: Component, perView }) {
  const [data, setData] = useState([]);
  const swiperElRef = useRef(null);
  useEffect(() => {
    Object.assign(swiperElRef.current, {
      slidesPerView: perView,
      spaceBetween: 30,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      virtual: {
        slides: [...items],
        renderExternal: function (dataVirtual) {
          setData(dataVirtual);
        },
        addSlidesAfter: 0,
        addSlidesBefore: 0,
      },
    });

    items.length !== 0 && swiperElRef.current.initialize();
  }, [items]);

  const handleClickNextButton = () => {
    swiperElRef.current?.swiper?.slideNext();
  };

  return (
    <>
      <button className="next">Вперед</button>
      <button className="prev">Назад</button>
      <swiper-container init="false" ref={swiperElRef}>
        {data?.slides?.map((dataItem, index) => (
          <swiper-slide key={dataItem._id} style={{ left: `${data.offset}px` }}>
            <Component {...dataItem} />
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
}

export default React.memo(Carousel);
