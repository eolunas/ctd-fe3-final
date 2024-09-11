import React from "react";
import { useCharStates } from "../Context";

const Card = ({ name, username, id }) => {
  const { setFavs } = useCharStates();
  const addFav = ()=>{
    setFavs((favs) => [...favs, id] );
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
