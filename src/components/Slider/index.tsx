import React from 'react';
import { Swiper } from 'swiper/react';
import { ISliderProps } from './types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider: React.FC<ISliderProps> = (props: ISliderProps) => {
  const { settings, children } = props;
  return (
    <Swiper
      loop
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      {...settings}
    >
      {children}
    </Swiper>
  );
};
