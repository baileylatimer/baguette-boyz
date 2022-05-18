import React from 'react';
import Slashes from "~/components/elements/slashes"

class Faq extends React.Component {


  render(){

    return (

      <div class="border radius-lg container margin-top-md">
        <div class="grid border-bottom">
          <div class="flex justify-between col-4 items-center padding-sm">
            <Slashes />
            <h2 class="">003</h2>
            <Slashes />
          </div>
          <div class="border-left border-right col-4 flex justify-center items-center padding-sm">
            <h2 class="">FAQ</h2>
          </div>
          <div class="col-4 flex justify-center padding-sm">
            <h2 class="">質問</h2>
          </div>
        </div>
        <div class="grid border-bottom">
          <div class="col-12">
            

            <section class="flex flex-column padding-md@lg">
              <div class="">

                <ul class="accordion  js-accordion" data-animation="on" data-multi-items="on">

                  <div class="border radius-lg@lg">
                    <li class="accordion__item  js-accordion__item ">
                      <button class="reset accordion__header padding-y-sm padding-x-md js-tab-focus" type="button">
                        <h4 class="text-md text-uppercase">What does the roadmap look like?</h4>

                        <svg class="icon accordion__icon-arrow-v2   border radius-lg no-js:is-hidden" viewBox="0 0 20 20">
                          <g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="3" x2="17" y2="17" />
                            <line x1="17" y1="3" x2="3" y2="17" />
                          </g>
                        </svg>
                      </button>

                      <div class="accordion__panel padding-top-xxs padding-x-md padding-bottom-md js-accordion__panel">
                        <div class="text-component line-height-md text-space-y-md">
                          <p>You can view the roadmap <a href="/roadmap">here</a>.</p>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div class="border radius-lg@lg margin-top-sm@lg">
                    <li class="accordion__item  js-accordion__item ">
                      <button class="reset accordion__header padding-y-sm padding-x-md js-tab-focus" type="button">
                        <h4 class="text-md text-uppercase">What marketplace will baguette boyz be listed on?</h4>

                        <svg class="icon accordion__icon-arrow-v2   border radius-lg no-js:is-hidden" viewBox="0 0 20 20">
                          <g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="3" x2="17" y2="17" />
                            <line x1="17" y1="3" x2="3" y2="17" />
                          </g>
                        </svg>
                      </button>

                      <div class="accordion__panel padding-top-xxs padding-x-md padding-bottom-md js-accordion__panel">
                        <div class="text-component line-height-md text-space-y-md">
                          <p>Opensea.io — Any other marketplaces listing the collection is not authorized by us at this time, do not buy as we can't verify authenticity.</p>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div class="border radius-lg@lg margin-top-sm@lg">
                    <li class="accordion__item  js-accordion__item ">
                      <button class="reset accordion__header padding-y-sm padding-x-md js-tab-focus" type="button">
                        <h4 class="text-md text-uppercase">Who is the team behind baguette boyz?</h4>

                        <svg class="icon accordion__icon-arrow-v2   border radius-lg no-js:is-hidden" viewBox="0 0 20 20">
                          <g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="3" x2="17" y2="17" />
                            <line x1="17" y1="3" x2="3" y2="17" />
                          </g>
                        </svg>
                      </button>

                      <div class="accordion__panel padding-top-xxs padding-x-md padding-bottom-md js-accordion__panel">
                        <div class="text-component line-height-md text-space-y-md">
                          <p>Baguette Boyz is being built by AG3 Labs. You can see the full team <a href="/about">here</a>.</p>
                        </div>
                      </div>
                    </li>
                  </div>


                </ul>
              </div>
            </section>


          </div>
        </div>

      </div>
    );

  }

}


export default Faq;
