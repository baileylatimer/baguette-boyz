import React from 'react';
import JapaneseVertical from '~/components/elements/japanese-vertical'
import Slashes from "~/components/elements/slashes"
import Cover from "~/images/art/cover-art.jpg"

class Hero extends React.Component {

  render(){

    return (

      
      <div class="flex container">
        <JapaneseVertical/>
        <div class="border radius-lg grid width-100% margin-left-md@lg margin-top-md">

          <div class="col-2 border-right hide show@lg">

          </div>
          <div class="col-10@lg col-12 border-left flex-column justify-between  height-100% width-100%">
            <div class="border-bottom flex items-center justify-between padding-sm">
              <Slashes />
              <h2 class="text-nowrap padding-x-sm">114 days</h2>
              <Slashes />
            </div>
            <div class="icebox card card--team" style={{backgroundImage: `url(${Cover})`}}>
              
            </div>
            <a class="btn btn--primary btn--lg" href="openseas.io" target="_blank">Shop on Openseas</a>
          </div>
        </div>
      </div>

    );

  }

}


export default Hero;
