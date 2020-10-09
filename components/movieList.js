import React from "react";
import Link from "next/link";

import { render } from "react-dom";

class MovieList extends React.Component {
  // constructor() {
  //     super()

  //     this.state = {
  //         count : 0
  //     }
  // }

  // increment = () => {
  //     // alert('Incrementing Number');
  //     const { count } = this.state;
  //     // debugger

  //     this.setState({
  //         count : count + 1
  //     })
  // }

  // decrement = () => {
  //     // alert('Decrementing Number');
  //     const { count } = this.state;

  //     this.setState({
  //         count : count - 1
  //     })
  // }

  shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  renderMovies(movies) {
    return movies.map((movie, key) => (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <a href="/movies/[id]" as={`/movies/${movie.id}`}>
            <img className="card-img-top" src={movie.image} alt="" />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a >{movie.name}</a>
              </Link>
            </h4>
            <p className="card-text">{this.shorten(movie.description, 100)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.rating}</small>
          </div>
        </div>
    <style jsx>{`
        .card-img-top{
          max-height : 130px
        }
    `}</style>
      </div>
    ));
  }

  render() {
    const { movies } = this.props;

    return (
      <React.Fragment>
        {/* {movies.map((movie, key) => {
          return (
            <div className="col-lg-4 col-md-6 mb-4" key={key}>
              <div className="card h-100">
                <a href="#">
                  <img className="card-img-top" src={movie.image} alt="" />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{movie.name}</a>
                  </h4>
                  <p className="card-text">{movie.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{movie.rating}</small>
                </div>
              </div>
            </div>
          );
        })} */}

        {this.renderMovies(movies)}
      </React.Fragment>
    );
  }
}

export default MovieList;
