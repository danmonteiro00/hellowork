import { ReactNode } from 'react';
import { SwiperProps } from 'swiper/react';

export interface ISliderProps {
  settings?: SwiperProps;
  children: ReactNode;
}
