import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";
function Movie({ id, coverMedImg, title, summary, genres, year, rating }) {
  return (
    <div className="movie__list--container">
      <div className="img--container">
        <Link to={`/movie/${id}`}>
          <img src={coverMedImg} alt="title" />
        </Link>
      </div>
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
    </div>
  );
}
Movie.propTypes = {
  coverMedImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
