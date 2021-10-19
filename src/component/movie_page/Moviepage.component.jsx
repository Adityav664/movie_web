import React from 'react';
import './Moviepage.component.css';
import ReactPlayer from 'react-player';
import errorimg from  './../../static/errorimg.png';

class Moviepage extends React.Component {
    constructor() {
        super();
        this.state = {
            videodata: null,
        };
    }

    async componentDidMount() {
        await fetch(`https://api.themoviedb.org/3/movie/${this.props.location.state.id}/videos?api_key=120ffdf9febca1402dbdc85c9c371d42&language=en-US`)
            .then(response => response.json()).then(data => this.setState({ videodata: data }))
    }
    render() {
        console.log(this.props.location.state)
        return (
            <div className="movie-page">
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/original/${this.props.location.state.poster_path}`} style={{ width: "500px",height:"900px" }} alt="" />
                </div>
                <div className="name">
                {(this.state.videodata)?console.log(this.state.videodata.results.length):null}
                    {(this.state.videodata)?
                    (this.state.videodata.results.length)?
                    <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${this.state.videodata.results[0].key}`}
                    light={true}
                    height="900px"
                    width="1800px"
                    padding="0px"
                    style={{
                        padding:"10px"
                    }}
                    />:<img src={errorimg} style={{height:"9-00px",width:"1800px"}}/>
                    :null}
                </div>
            </div>
        );
    }
}

export default Moviepage;