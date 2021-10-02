import React from 'react';
import ImageSlider from '../imageSlider/ImageSlider.component';
import SliderList from '../sliderList/SliderList.component';

const Home =(props)=>(
    <div>
        <ImageSlider images={props.images}/>
        <SliderList />
    </div>
);

export default Home;