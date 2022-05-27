import React from 'react';
import Slashes from "~/components/elements/slashes"
import CardTeam from "~/components/elements/card-team"
import Alde from "~/images/team--alde.jpg"
import Tyler from "~/images/team--tyler.jpg"
import Bailey from "~/images/team--bailey.jpg"
import Image from "~/components/pic"

class Team extends React.Component {


  render(){

    return (



     <div class="border radius-lg container margin-top-md">
        <div class="grid border-bottom">
          <div class="flex justify-between col-4 items-center padding-sm">
            <Slashes />
            <h2 class="">001</h2>
            <Slashes />
          </div>
          <div class="border-left border-right col-4 flex justify-center items-center padding-sm">
            <h2 class="">Team</h2>
          </div>
          <div class="col-4 flex justify-center items-center padding-sm">
            <h2 class="">チーム</h2>
          </div>
        </div>
        <div class="grid border-bottom">
        <div class="flex col-6@lg col-12">
            <div class="width-50% border">
              <div class="card card--team" style={{backgroundImage: `url(${Alde})`}}></div>
              <CardTeam class="" name="Alde Nguyen" twitter="https://twitter.com/aldeswag" title="Co-Founder" img="team--alde.jpg" />
            </div>

            <div class="width-50% border">
              <div class="card card--team" style={{backgroundImage: `url(${Tyler})`}}></div>
              <CardTeam class="" name="Tyler Gordon" twitter="https://twitter.com/aldeswag" title="Co-Founder" img="team--alde.jpg" />
            </div>
          </div>
          <div class="flex col-6@lg col-12">
            <div class="width-50% border">
              <div class="card card--team" style={{backgroundImage: `url(${Bailey})`}}></div>
              <CardTeam class="" name="Bailey Latimer" twitter="https://twitter.com/latimer2k" title="Web Design/Dev" img="team--bailey.jpg" />
            </div>


          </div>
        </div>
      </div>

    );

  }

}


export default Team;
