import './App.css';
import React from 'react';
import Header from './component/header/Header.component';
import Home from './component/Home/Home.component';
import Moviepage from './component/movie_page/Moviepage.component';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Movielist from './component/movielist/movielist.componrnt';
import Signup from './component/signup/Signup'
import Login from './component/Login/login';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: null,
    };
  }

  async componentDidMount() {
    await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=120ffdf9febca1402dbdc85c9c371d42&page=1")
      .then(response => response.json())
      .then(data => this.setState({ movie: data.results }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        {(this.state.movie) ?
          <Router>
            <Route exact path="/" render={()=><Home images={this.state.movie} />} />
            <Route path="/movie" component={Moviepage} />
            <Route path="/movielist" component={Movielist} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Router>
          : null}
      </div>
    );
  }
}

export default App;
