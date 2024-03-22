import { useState } from "react";
import CamperItem from "../../componets/CamperList/CamperItem.jsx/CamperItem";
import { nanoid } from "nanoid";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (camper) => {
    const camperWithId = { ...camper, _id: nanoid() };
    setFavorites((prevFavorites) => [...prevFavorites, camperWithId]);
  };

  const removeFavorites = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav._id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      {favorites.map((favCamper) => (
        <CamperItem
          key={favCamper._id}
          camper={favCamper}
          toggleModal={() => {}}
          addToFavorites={addFavorites}
          removeFromFavorites={removeFavorites}
        />
      ))}
    </div>
  );
};

export default Favorites;
