import React from 'react';
import { StaticQuery, graphql,  useStaticQuery, Link } from 'gatsby'

class Footer2 extends React.Component {


  render(){

    return (

      <footer class="padding-y-lg margin-top-lg">
        <div class="flex">
      © {new Date().getFullYear()}, Baguette Boyz
      </div>

  <div class="flex">
    <Link to={`/terms-of-use`}>
      Terms of use |
    </Link>
    <Link to={`/terms-of-use`}>
      &nbsp;Terms of sale |
    </Link>
    <Link to={`/terms-of-use`}>
      &nbsp;Privacy policy
    </Link>
  </div>


    </footer>
    );

  }

}


export default Footer2;
