import React from 'react';
import SlideItems from '../slideItems/SlideItems.component';
import {Link} from "react-router-dom";
import './SliderList.component.css';

class SliderList extends React.Component {
  constructor() {
    super();
    this.state = {
      movie_popular: null,
      movie_latest: null,
      movie_nowplaying: null,
      movie_top_Rated: null,
      movie_Upcoming: null,
      tv_popular: null,
      tv_latest: null,
      tv_airingtoday: null,
      tv_air: null,
      tv_top_Rated: null,
    }
  }
  async componentDidMount() {
    await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=120ffdf9febca1402dbdc85c9c371d42&page=1")
      .then(response => response.json())
      .then(data => this.setState({ movie_top_Rated: data.results }))
    await fetch("https://api.themoviedb.org/3/movie/popular?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ movie_popular: data.results }))
    await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ movie_nowplaying: data.results }))
    await fetch("https://api.themoviedb.org/3/movie/latest?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ movie_latest: data.results }))
    await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ movie_Upcoming: data.results }))
    await fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ tv_air: data.results }))
    await fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ tv_airingtoday: data.results }))
    await fetch("https://api.themoviedb.org/3/tv/latest?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ tv_latest: data.results }))
    await fetch("https://api.themoviedb.org/3/tv/popular?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ tv_popular: data.results }))
    await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=120ffdf9febca1402dbdc85c9c371d42&page=3")
      .then(response => response.json())
      .then(data => this.setState({ tv_top_Rated: data.results }))
  }
  render() {
    return (
      <div>
        <div className='sliderlist' style={{ backgroundColor: "white" }}>
          <div className='slide-li' style={{ color: 'purple' }}>
            {(this.state.movie_popular) ?
              <div>
                <div className="itemList">
                  <h2 style={{ marginTop: '0', paddingTop: '5px' }}>Popular Movies</h2>
                  <Link
                    class="button4"
                    to={{ pathname: '/movielist', state:{url:"https://api.themoviedb.org/3/movie/popular?api_key=120ffdf9febca1402dbdc85c9c371d42&page=" ,page:1 }}}
                    style={{ backgroundColor: '#9a4ef1' }}>
                    View More
                  </Link>
                </div>
                <SlideItems images={this.state.movie_popular} />
              </div> : null}
            {(this.state.movie_Upcoming) ?
              <div>
                <div className="itemList">
                  <h2 style={{ marginTop: '0', paddingTop: '5px' }}>Upcoming Movies</h2>
                  <Link
                    class="button4"
                    to={{ pathname: '/movielist', state: {url:"https://api.themoviedb.org/3/movie/upcoming?api_key=120ffdf9febca1402dbdc85c9c371d42&page=",page:1 }}}
                    style={{ backgroundColor: '#9a4ef1' }}>
                    View More
                  </Link>
                </div>
                <SlideItems images={this.state.movie_Upcoming} />
              </div> : null}
            {(this.state.movie_nowplaying) ?
              <div>
                <div className="itemList">
                  <h2 style={{ marginTop: '0', paddingTop: '5px' }}>Now Playing Movies</h2>
                  <Link
                    class="button4"
                    to={{ pathname: '/movielist', state: {url:"https://api.themoviedb.org/3/movie/latest?api_key=120ffdf9febca1402dbdc85c9c371d42&page=",page:1} }}
                    style={{ backgroundColor: '#9a4ef1' }}>
                    View More
                  </Link>
                </div>
                <SlideItems images={this.state.movie_nowplaying} />
              </div> : null}
            {(this.state.movie_top_Rated) ?
              <div>
                <div className="itemList">
                  <h2 style={{ marginTop: '0', paddingTop: '5px' }}>Top Rated Movies</h2>
                  <Link
                    class="button4"
                    to={{ pathname: '/movielist', state:{url:"https://api.themoviedb.org/3/movie/top_rated?api_key=120ffdf9febca1402dbdc85c9c371d42&page=",page:1} }}
                    style={{ backgroundColor: '#9a4ef1' }}>
                    View More
                  </Link>
                </div>
                <SlideItems images={this.state.movie_top_Rated} />
              </div> : null}
            {(this.state.tv_top_Rated) ?
              <div>
                <div className="itemList">
                  <h2 style={{ marginTop: '0', paddingTop: '5px' }}>TV Top Rated</h2>
                  <Link
                    class="button4"
                    to={{ pathname: '/movielist', state: {url:"https://api.themoviedb.org/3/tv/top_rated?api_key=120ffdf9febca1402dbdc85c9c371d42&page=",page:1}}}
                    style={{ backgroundColor: '#9a4ef1' }}>
                    View More
                  </Link>
                </div>
                <SlideItems images={this.state.tv_top_Rated} />
              </div> : null}
            {(this.state.tv_air) ?
              <div>
                <div className="itemList">
                  <h2 style={{ marginTop: '0', paddingTop: '5px' }}>TV Top Air</h2>
                  <Link
                    class="button4"
                    to={{ pathname: '/movielist', state: {url:"https://api.themoviedb.org/3/tv/on_the_air?api_key=120ffdf9febca1402dbdc85c9c371d42&page=",page:1}}}
                    style={{ backgroundColor: '#9a4ef1' }}>
                    View More
                  </Link>
                </div>
                <SlideItems images={this.state.tv_air} />
              </div> : null}
            {(this.state.tv_airingtoday) ?
              <div>
                <div className="itemList">
                  <h2 style={{ marginTop: '0', paddingTop: '5px' }}>TV Airing Today</h2>
                  <Link
                    class="button4"
                    to={{ pathname: '/movielist', state: {url:"https://api.themoviedb.org/3/tv/airing_today?api_key=120ffdf9febca1402dbdc85c9c371d42&page=",page:1} }}
                    style={{ backgroundColor: '#9a4ef1' }}>
                    View More
                  </Link>
                </div>
                <SlideItems images={this.state.tv_airingtoday} />
              </div> : null}
            {(this.state.tv_popular) ?
              <div>
                <div className="itemList">
                  <h2 style={{ marginTop: '0', paddingTop: '5px' }}>TV Popular</h2>
                  <Link
                    class="button4"
                    to={{ pathname: '/movielist', state:{url:"https://api.themoviedb.org/3/tv/popular?api_key=120ffdf9febca1402dbdc85c9c371d42&page=",page:1}}}
                    style={{ backgroundColor: '#9a4ef1' }}>
                    View More
                  </Link>
                </div>
                <SlideItems images={this.state.tv_popular} />
              </div> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SliderList;