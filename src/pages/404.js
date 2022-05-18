import React from 'react'

import SEO from '~/components/seo'
import ScrollingText from "~/components/scrolling-text"
import Snowflakes from "~/components/snowflakes"
import Image from "~/components/pic"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="padding-top-xxxl container">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Image filename="art/cover-art.jpg" />
      <ScrollingText />
      <Snowflakes />
    </div>
  </>
)

export default NotFoundPage
