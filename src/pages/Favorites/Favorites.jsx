import { useEffect, useState } from "react";
import CamperItem from "../../componets/CamperList/CamperItem.jsx/CamperItem";

const Favorites = () => {
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCampers(favorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favoriteCampers.filter((camp) => camp !== id);
    setFavoriteCampers(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      {favoriteCampers.map((camperId) => (
        <CamperItem
          key={camperId}
          camper={camperId}
          removeFromFavorites={removeFromFavorites}
        />
      ))}
    </div>
  );
};

export default Favorites;
