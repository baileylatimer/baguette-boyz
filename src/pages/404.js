import React from 'react'

import SEO from '~/components/seo'
import ScrollingText from "~/components/scrolling-text"
import Snowflakes from "~/components/snowflakes"
import Image from "~/components/pic"
import Slashes from "~/components/elements/slashes"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="padding-top-xxxl container">
    <div class="border radius-lg margin-bottom-md">
        <div class="grid border-bottom">
          <div class="flex justify-between col-4 items-center padding-sm">
            <Slashes />
            <h2 class="">404</h2>
            <Slashes />
          </div>
          <div class="border-left border-right col-8 flex justify-center items-center padding-sm">
            <h2 class="">Loading...</h2>
          </div>
          <ScrollingText />
  
        </div>
      </div>

      <Image filename="art/cover-art.jpg" />
      <ScrollingText />
      <Snowflakes />
    </div>
  </>
)

export default NotFoundPage
