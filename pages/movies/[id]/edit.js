import React from "react";
import MovieCreateForm from "../../../components/movieCreateForm";
import { getCategories, getMovieById } from "../../../actions";

class EditMovie extends React.Component {
  static async getInitialProps({ query }) {
    const categories = await getCategories();

    return { categories: categories, query: query };
  }

  componentDidMount() {
    const { id } = this.props.query;
    getMovieById(id).then((movie) => {
      this.setState({ movie });
    });
  }

  state = {
    movie: {
      name: "",
      description: "",
      rating: "",
      releaseYear: "",
      image: "",
      cover: "",
      longDesc: "",
    },
  };

  render() {
    const { movie } = this.state;
    return (
      <div className="container mb-3">
        <h1>Edit The Movie</h1>
        <MovieCreateForm
          categories={this.props.categories}
          initialData={movie}
        />
      </div>
    );
  }
}

export default EditMovie;
