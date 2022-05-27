import React from 'react';
import Slashes from "~/components/elements/slashes"
import Discord from "~/components/elements/discord"
import Twitter from "~/components/elements/twitter"
import SocialArt from "~/images/art/social.png"

class Partners extends React.Component {


  render(){

    return (

      <div class="border radius-lg container margin-top-md">
        <div class="grid border-bottom">
          <div class="flex justify-between col-4 items-center padding-sm border-right">
            <Slashes />
            <h2 class="">003</h2>
            <Slashes />
          </div>
          <div class="col-8 flex justify-center items-center padding-sm">
            <h2 class="text-nowrap">Partners</h2>
          </div>
        </div>
        <div class="grid border-bottom">
<p class="padding-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>

    );

  }

}


export default Partners;
