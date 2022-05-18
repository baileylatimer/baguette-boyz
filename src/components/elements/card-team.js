import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Image from "~/components/pic"
import Twitter from "~/components/elements/twitter"




const CardTeam = props => (
  
    <li className={props.classes + " reveal-fx reveal-fx--translate-up "}  style={{backgroundImage: `url(${props.img})`}}>
        <div className="" >
          {/* <Image filename={props.img} alt={props.name}/> */}
            <div class="card-v9__content padding-top-sm adv-gallery-v3__img-link">
                <div class="padding-bottom-sm max-width-xxs flex justify-between items-center padding-sm">
                  <div class="flex flex-column">
                    <p class="color-contrast-higher margin-bottom-xxs text-md">{props.name}</p>
                    <p class="color-contrast-higher margin-bottom-xxs text-md">{props.title}</p>
                  </div>
                  <a href={props.twitter}><Twitter/></a>
                </div>
            </div>
        </div>
    </li>
);

export default CardTeam