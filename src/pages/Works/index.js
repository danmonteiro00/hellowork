import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FreelaCard } from '../../components/FreelaCard';
import "./styles.css";

const items = [
    <div className="item" data-value="1"><FreelaCard /></div>,
    <div className="item" data-value="2"><FreelaCard /></div>,
    <div className="item" data-value="3"><FreelaCard /></div>,
    <div className="item" data-value="4"><FreelaCard /></div>,
    <div className="item" data-value="5"><FreelaCard /></div>,
];

export const Works = () => {
    return (
        <div className='work-container'>
            <AliceCarousel
            animationType="fadeout" 
            animationDuration={800}
                mouseTracking
                items={items}
                controlsStrategy="alternate"
            />
        </div>

    );
}