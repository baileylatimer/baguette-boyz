import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Image from "~/components/pic"
import Twitter from "~/components/elements/twitter"




const CardTeam = props => (
  
    <li className={props.classes + " reveal-fx reveal-fx--translate-up "}>
        <div className="card card-v9" to={ "/work/" + props.url}  >
          <Image filename={props.img} alt={props.name}/>
            <div class="card-v9__content padding-top-sm adv-gallery-v3__img-link">
                <div class="padding-bottom-sm max-width-xxs">
                    <p class="color-contrast-higher margin-bottom-xxs text-md">{props.name}</p>
                    <p class="color-contrast-higher margin-bottom-xxs text-md">{props.title}</p>
                    <a href={props.twitter}><Twitter/></a>
                </div>
            </div>
        </div>
    </li>
);

export default CardTeam