import { useCharStates } from "../Context";

// eslint-disable-next-line react/prop-types
const Card = ({ name, username, id }) => {
  const { favs, setFavs, theme } = useCharStates();
  const addFav = ()=>{
    setFavs((favs) => [...favs, id] );
  }
  const stored = favs.includes(id);
  return (
    <div className="card" >
        {/* En cada card deberan mostrar en name - username y el id */}
        <a href={`/Detail/${id}`}>
          <img src="/images/doctor.jpg" alt="Foto doctor" />
        </a>
        <div className={`info-container ${theme == "dark" && "dark-info-container"}`}>
            <span>{name}</span>
            <span>{username}</span>
        </div>
        <button onClick={addFav} className="favButton">
        {stored ?"💚" : "🤍"}
        </button>
    </div>
  );
};

export default Card;
