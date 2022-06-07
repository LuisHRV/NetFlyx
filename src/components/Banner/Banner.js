import React, { useEffect } from 'react';
import "./Banner.css"
import categories, {getMovies} from '../../api'

function Banner() {
    const [movie, setMovie] = React.useState({});

    const fetchRandomMovies = async () => {
        try {
            const netflyxOriginalsCategory = categories.find(
                (category) => category.name === 'netflyxOriginals'
            );
            const data = await getMovies(netflyxOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        }catch (error) {
            console.log("Banner fetchRandomMovies error:", error)
        }
    }

    useEffect(() => {
        fetchRandomMovies();
    },[])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return <header className="banner-container" style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      roundPosition: "center-center"
  }}>
      <div className="banner-content">
        <h1 className="banner-title">
            {movie?.title || movie.name || movie.original_name}
        </h1>
        <div className="banner-button-container">
            <button className="banner-button">
                Assistir
            </button>
            <button className="banner-button">
                Minha lista
            </button>
        </div>
        <div className="banner-description">
            <h1>{truncate(movie?.overview)}</h1>
        </div>
      </div>
  </header>;
}

export default Banner;