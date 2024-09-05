import React from "react";
import { IMG_URL } from "../hooks/useEnv";

function ActorsCart({item}) {
    const {id, profile_path, name, character} = item
  return (
    <div
      
      className="min-w-[150px] shadow-lg border overflow-hidden border-black rounded-md"
    >
      <img
        src={`${IMG_URL}/${profile_path}`}
        alt={name}
        width={200}
        className="object-cover "
      />
      <div className="p-2">
        <p className="text-base font-bold">{name}</p>
        <p className="text-sm">{character}</p>
      </div>
    </div>
  );
}

export default ActorsCart;
