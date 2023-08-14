import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-details__container">
      <div className="movie-details">
        <h1 className="movie-title">{details.title}</h1>
        <div className="movie-meta">
          {details.year} (⭐️{details.rating})
        </div>
        {details.genres &&
          details.genres.length > 0 && ( // Add this condition
            <ul className="movie-meta">
              {details.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          )}

        <p className="movie-description">{details.description_full}</p>
        <button className="btn-Back">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
      <div className="movie-img__container">
        <img
          className="movie-img"
          src={details.large_cover_image}
          alt="title"
        />
      </div>
    </div>
  );
}

export default Detail;
