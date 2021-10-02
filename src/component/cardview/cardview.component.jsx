import React from 'react';
import './cardview.component.css';
import { Link } from 'react-router-dom';
import ReactCardFlipper from "react-card-flipper";

const CardView = (props) => {
    return (
        <div
            className="cardview"
            onClick={
                <Link to={{
                    pathname:'/movie', state:{data:props.data}
                }}/>
            }>
            {/* <img className="imgflip" src={`https://image.tmdb.org/t/p/original/${props.data.poster_path}`} alt="" /> */}
            <ReactCardFlipper
            width="450px"
            height="450px"
            behavior="hover">
                <div>
                    <img className="imgflip" src={`https://image.tmdb.org/t/p/original/${props.data.poster_path}`} alt="" />
                </div>
                <div className="txt">
                    {/* <img className="imgflip" src={`https://image.tmdb.org/t/p/original/${props.data.poster_path}`} alt="" /> */}
                    {props.data.overview}   
                </div>
            </ReactCardFlipper>
        </div>
    );
}
export default CardView;