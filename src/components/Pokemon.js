import React from "react";
import { Link } from "react-router-dom";
import useStoreZustand from "../utils/StateStore";
import { FaRegThumbsUp } from "react-icons/fa";


export const Pokemon = ({ name, id }) => {
  const getLike = useStoreZustand((state) => state.likes);
  const likeButton = useStoreZustand((state) => state.addLike);
  return (
    <div className="pokemon-card">
      <div className="pokemon-item">
        <h3>{name}</h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt="Foto Pokemon"
          className="img-pokemon"
        />
        <div>
          <Link
            to={`/detail/pokemon/${id}`}
            className="modal-close-btn"
            style={{ marginRight: 8 }}
          >
            Detail
          </Link>
        </div>
        <br></br>
        <div>
        <button className="btn-like" onClick={likeButton}>
          <FaRegThumbsUp size={20} />
        </button>
        <h3>{getLike} likes</h3>
        </div>
      </div>
    </div>
  );
};
