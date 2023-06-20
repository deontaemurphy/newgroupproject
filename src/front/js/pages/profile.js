import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import SimsCard from "../component/simsCard";

export default function Profile() {
  const { store, actions } = useContext(Context);
  const [activeFav, setActiveFav] = useState(false);

  let favorites = store.favorites;
  let name = store.user_name;

  console.log("FAVORITES", favorites)
  return (
    <div className="container">
      <div style={{ width: "100%", postion: "inline-block" }}>
        <img
          src="#"
          style={{ height: "300px", width: "100%" }}
        ></img>
        <img
          className="profilePic"
          src="#"
          style={{
            height: "200px",
            width: "200px",
            right: "45%",
            objectFit: "cover",
            top: "30%",
            position: "absolute",
          }}
        ></img>
      </div>
      <h2
        style={{
          right: "35%",
          top: "45%",
          position: "absolute",
        }}
      >{`${name}`}</h2>
      <div className="favorites" style={{display: "flex", flexDirection:"column", justifyContent: "center", textAlign:"center"}}>
      <h2 style={{ marginTop: "150px", marginBottom: "100px" }}>Favorites</h2>

      <div className="row row-cols-auto">
        {favorites.length > 0 &&
          ([...new Set(favorites)]).map((item, idx) => {
            // console.log("favorites", item);
            return (
              <div className="col" key={idx}>
                <SimsCard id={item.id} activeFavDF={true}/>
              </div>
            );
          })}
      </div>
      </div>
    </div>
  );
}
