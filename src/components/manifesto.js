import React from 'react';
import Slashes from "~/components/elements/slashes"
import Discord from "~/components/elements/discord"
import Twitter from "~/components/elements/twitter"
import SocialArt from "~/images/art/social.png"

class Manifesto extends React.Component {


  render(){

    return (

      <div class="border radius-lg container margin-top-md">
        <div class="grid border-bottom">
          <div class="flex justify-between col-4 items-center padding-sm border-right">
            <Slashes />
            <h2 class="">002</h2>
            <Slashes />
          </div>
          <div class="col-8 flex justify-center items-center padding-sm">
            <h2 class="text-nowrap">Manifesto</h2>
          </div>
        </div>
        <div class="grid border-bottom">
<p class="padding-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div class="grid border-top">
          <div class="col-6">
            <a class="btn btn--subtle btn--lg height-100%" href="openseas.io" target="_blank">
            <Discord/> Discord</a>
          </div>
          <div class="col-6 border-left">
            <a class="btn btn--subtle btn--lg height-100%" href="openseas.io" target="_blank">

            <Twitter/> Twitter</a>
          </div>
        </div>
      </div>

    );

  }

}


export default Manifesto;
