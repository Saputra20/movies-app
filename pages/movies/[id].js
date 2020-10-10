import { useRouter } from "next/router";
import { getMovieById , deleteMovieById} from "../../actions";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const handleDeleteMovie = (id) => {
    deleteMovieById(id).then(() => {
      router.push("/")
    })
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <p className="lead">
          <button className="btn btn-primary btn-lg mr-3" href="#" role="button">
            Learn more
          </button>
          <button onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg ml-3" href="#" role="button">
            Delete
          </button>
        </p>
      </div>
      <p className="desc-text">{movie.longDesc}</p>
      <style jsx>{`
        .desc-text{
            font-size: 21px;
        }
      `}</style>
    </div>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);

  return { movie };
};

// Movie.getInitialProps = async ({query}) => {
//     const movie = await getMovieById(query.id);

//   return { movie };
// };

export default Movie;
