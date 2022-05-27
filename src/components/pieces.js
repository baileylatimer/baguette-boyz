import React from 'react';
import Slashes from "~/components/elements/slashes"
import Image from "~/components/pic"
import Art from "../images/art/sample-art.png"

class Pieces extends React.Component {


  render(){

    return (

      <div class="border radius-lg container margin-top-md" id="projects">
        <div class="grid border-bottom">
          <div class="flex justify-between col-4 items-center padding-sm">
            <Slashes />
            <h2 class="">001</h2>
            <Slashes />
          </div>
          <div class="border-left border-right col-4@lg col-8 flex justify-center items-center padding-sm">
            <h2 class="">Projects</h2>
          </div>
          <div class="col-4 hide show@lg  justify-center items-center padding-sm">
            <h2 class="text-center">ピース</h2>
          </div>
        </div>
        <div class="grid border-bottom">
          <div class="flex col-6@lg col-12">
            <div class="width-50% border card" style={{backgroundImage: `url(${Art})`}}>
            </div>
          
              <div class="width-50% border card" style={{backgroundImage: `url(${Art})`}}>
                
              </div>
            </div>
            <div class="flex col-6@lg col-12">
              <div class="width-50% border card" style={{backgroundImage: `url(${Art})`}}>
                
              </div>
          
              <div class="width-50% border card" style={{backgroundImage: `url(${Art})`}}>
                
              </div>
            </div>
        </div>
        <div class="grid border-top flex">
          <div class="col-6@md col-12 padding-sm">
            <p class="">IcyMeta presents Baguette Boyz: A web 3, timeless, narrative-based collection of 4,824 Baguette Boyz alive and well on Ethereum Blockchain.</p>
          </div>
          <div class="col-6@md col-12">
            <a class="btn btn--primary btn--lg height-100%" href="openseas.io" target="_blank">See full collection</a>
          </div>
        </div>
      </div>

    );

  }

}


export default Pieces;
