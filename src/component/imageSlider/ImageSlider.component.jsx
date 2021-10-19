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
    return (
        <div>
        <img src={"https://www.wallpaperflare.com/static/1017/842/358/tv-banshee-breaking-bad-vikings-wallpaper.jpg"}
            style={{width:'100%', height:'28rem',filter:'brightness(0.45)'}}
         />
         <div className="ttl">Movie Web</div>
         </div>
    );
}

export default ImageSlider;