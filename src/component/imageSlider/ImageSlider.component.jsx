import React from 'react';
import './imageSlider.component.css';


function Imgdetail(data) {
    var img = [];
    for (let i = 0; i < 20; i++) {
        img.push(`https://image.tmdb.org/t/p/original/${data.images[i].poster_path}`);
    }
    return img;
}

const ImageSlider = (props) => {
    var img = Imgdetail(props);
    // let slides = [
    //     <img className="imgslider" src={img[0]} alt="1" />,
    //     <img className="imgslider" src={img[1]} alt="2" />,
    //     <img className="imgslider" src={img[2]} alt="3" />,
    //     <img className="imgslider" src={img[3]} alt="4" />,
    //     <img className="imgslider" src={img[4]} alt="5" />,
    //     <img className="imgslider" src={img[5]} alt="6" />,
    //     <img className="imgslider" src={img[6]} alt="7" />,
    //     <img className="imgslider" src={img[7]} alt="8" />,
    //     <img className="imgslider" src={img[8]} alt="9" />,
    //     <img className="imgslider" src={img[9]} alt="10" />,];
    return (
        // <Carousel className slides={slides} autoplay={true} interval={3000}/>
        <img src={"https://www.wallpaperflare.com/static/1017/842/358/tv-banshee-breaking-bad-vikings-wallpaper.jpg"}
            style={{width:'100%', height:'800px'}}
         />
    );
}

export default ImageSlider;