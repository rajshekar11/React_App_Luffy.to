import React, { useEffect, useState } from 'react';

const Trending = () => {
  const [trendingAnime, setTrendingAnime] = useState([]);

  useEffect(() => {
    fetchTrendingAnime();
  }, []);

  const fetchTrendingAnime = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/recommendations/anime'); // Fetch trending anime
      const data = await response.json();
      setTrendingAnime(data.data);
    } catch (error) {
      console.error('Error fetching trending anime:', error);
    }
  };

  return (
    <div className="container">
      <h1>Trending Anime</h1>
      <div className="row">
        {trendingAnime.map((anime) => (
        <div className="col-md-2" key={anime.mal_id}>
           
             {anime.entry.map(item => (
            <div className="card" key={item.mal_id}>
              <img src={item.images.jpg.image_url} className="card-img-top img-fluid" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{anime.synopsis}</p>
                <a href={item.url} className="btn btn-primary">Read More</a>
              </div>
            </div>
             ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
