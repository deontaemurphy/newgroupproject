import React from "react";
const Card = (props) => {
  let characterProp = (props.type = "character" ? (
    <div>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${
          props.id + 1
        }.jpeg`}
        onError={(e) => {
          e.target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        className="card-img-top"
        style={{ maxHeight: "300px", objectFit: "cover" }}
        alt="pictures of StarWars characters"
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <h6 className="card-information">Gender:{props.item.gender}</h6>
        <h6 className="card-information">HairColor:{props.item.hair_color}</h6>
        <h6 className="card-information">Eye-Color:{props.item.eye_color}</h6>
      </div>
    </div>
  ) : (
    ""
  ));

  let starshipProp = (props.type = "starship" ? (
    <div>
      <img
        src={`https://starwars-visualguide.com/assets/img/starship/${
          props.id + 1
        }.jpeg`}
        onError={(e) => {
          e.target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        className="card-img-top"
        style={{ maxHeight: "300px", objectFit: "cover" }}
        alt="pictures of StarWars ships"
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <h6 className="card-information">cost_in_credits:{props.item.cost_in_credits}</h6>
        <h6 className="card-information">hyperdrive_rating:{props.item.hyperdrive_rating}</h6>
        <h6 className="card-information">model:{props.item.model}</h6>
      </div>
    </div>
  ) : (
    ""
  ));
  
 let planetProp = props.type="planet"? <div>
 <img src={`https://starwars-visualguide.com/assets/img/planet/${props.id+1}.jpeg`} 
 onError={(e)=>{
     e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'
 }}
 className="card-img-top"
 style={{maxHeight:"300px",objectFit:"cover"}}
 alt="pictures of StarWars planets"
 />
 <div className="card-body">
 <h5 className="card-title">{props.item.name}</h5>
 <h6 className="card-information">diameter:{props.item.diameter}</h6>
 <h6 className="card-information">population:{props.item.population}</h6>
 <h6 className="card-information">terrian:{props.item.terrian}</h6>
 </div>
</div>:""
  return (
    <div className="card" style="width:18rem;">
        {props.type=="character"? characterProp:""}
        {props.type=="planet"? planetProp:""}
        {props.type=="starship"? starshipProp:""}
    </div>
  );
};
export default Card;
