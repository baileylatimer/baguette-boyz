import React from 'react';
import Slashes from "~/components/elements/slashes"
import CardTeam from "~/components/elements/card-team"
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

            <CardTeam class=" col-12" name="Alde Nguyen" twitter="https://twitter.com/alde_nguyen" title="Co-Founder" img="team--alde.jpg" />
          </div>
          <div class="flex col-6@lg col-12">
            <div class="width-50% border card">

            </div>

            <div class="width-50% border card">

            </div>
          </div>
        </div>
        <div class="grid border-top flex">
          <div class="col-6@md col-12 padding-sm">
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate libero vitae feugiat diam leo. Venenatis sapien in malesuada.</p>
          </div>
          <div class="col-6@md col-12">
            <a class="btn btn--primary btn--lg height-100%" href="openseas.io" target="_blank">See full collection</a>
          </div>
        </div>
      </div>

    );

  }

}


export default Team;
