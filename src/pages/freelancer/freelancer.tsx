import React, { useCallback, useEffect, useReducer } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '../../components/Slider';
import { FreelancerCard } from '../../components/FreelancerCard';
import { getAllFreelancers } from './actions';
import { InitialState, Reducer } from './actions/reducer';
import { IFreelancerProps } from './types';

export const Freelancer: React.FC<IFreelancerProps> = (props: IFreelancerProps) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const fetchFreelancers = useCallback(() => getAllFreelancers()(dispatch), []);

  useEffect(() => {
    fetchFreelancers();
  }, [fetchFreelancers]);

  return (
    <Slider
      settings={{
        slidesPerView: 1,
        navigation: true
      }}
    >
      {state.freelancers.records.map((freelancer) => (
        <SwiperSlide>
          <FreelancerCard freelancer={freelancer} />
        </SwiperSlide>
      ))}
    </Slider>
  );
};
