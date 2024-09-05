import React from "react";
import { IMG_URL } from "../hooks/useEnv";

function ActorsCart({ item }) {
  const { id, profile_path, name, character } = item;
  
  return (
    <div className="min-w-[150px] shadow-lg border overflow-hidden border-black rounded-md">
      <img
        src={`${IMG_URL}/${profile_path}`}
        alt={name}
        onError={(e) => (e.target.src = "https://placehold.co/150x225?text=No+Image")}
        className="w-[150px] h-[225px] object-cover"
      />
      <div className="p-2">
        <p className="text-base font-bold">{name}</p>
        <p className="text-sm">{character}</p>
      </div>
    </div>
  );
}

export default ActorsCart;