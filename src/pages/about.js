import React from 'react'
import { Link } from 'gatsby'


import { useStaticQuery, graphql } from "gatsby"
import SEO from '~/components/seo'
import Img from "~/components/pic"
import Image from "../components/pic"
import Hero from "~/components/hero"
import ScrollingText from "~/components/scrolling-text"
import Team from "~/components/team"
import Social from "~/components/social"
import Faq from "~/components/faq"
import Footer2 from "~/components/footer-2"
import Snowflakes from "~/components/snowflakes"


export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "cover_gosun.jpg"}) {
        childImageSharp {
          fluid {
          ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


return (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section class="project-page  flex flex-column items-center">

      <div class="hero margin-top-xxl">
        <h1 class="text-xxxxl color-contrast-higher text-center font-display glitch" data-text='about'>About</h1>
      </div>
      <Team />
      <ScrollingText />
      <Footer2 />
      <Snowflakes />

    </section>


  </>
)
}

