import React from 'react';
import JapaneseVertical from '~/components/elements/japanese-vertical'

class Hero extends React.Component {

  render(){

    return (

      
      <div class="flex container">
        <JapaneseVertical/>
        <div class="border radius-lg grid width-100% margin-left-md@lg margin-top-md">

          <div class="col-2 border-right">

          </div>
          <div class="col-10 border-left flex-column justify-between  height-100% width-100%">
            <div class="border-bottom flex items-center justify-center">
              <h2 class="text-nowrap">114 days</h2>
            </div>
            <div class="icebox">
              
            </div>
            <a class="btn btn--primary btn--lg" href="openseas.io" target="_blank">Shop on Openseas</a>
          </div>
        </div>
      </div>

    );

  }

}


export default Hero;
