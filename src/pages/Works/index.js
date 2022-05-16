import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FreelaCard } from '../../components/FreelaCard';
import { TopBar } from '../../components/TopBar';
import "./styles.css";

const items = [
    <div className="item" data-value="1"><FreelaCard /></div>,
];

export const Works = () => {
    return (
        <>
            <TopBar />
            <div className='work-container'>
                <AliceCarousel
                    animationType="fadeout"
                    animationDuration={800}
                    mouseTracking
                    items={items}
                    controlsStrategy="alternate"
                />
            </div>
        </>
    );
}