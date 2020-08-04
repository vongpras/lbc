import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  console.log(props);
  return (
    <div
      className={props.inOffer === true ? "container-inoffers" : "container"}
    >
      <Link
        className="link"
        key={props.offer._id}
        to={"/offer/" + props.offer._id}
      >
        <div className="image">
          <img src={props.offer.picture && props.offer.picture.secure_url} />
        </div>

        <div className="text">
          <div className={props.inOffer === true ? "title-green" : "title-red"}>
            {props.offer.title}
          </div>
          <div className="price">{props.offer.price} €</div>

          <div className="date">{props.offer.created}</div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
