import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src=""
              alt="avatar"
              className="avatar-img"
              /> */}

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p> | HTML | CSS | JavaScript | React | </p>

        <div className="social-links">
        {/*linked to github */}
       <a href="https://github.com/serkansonmez06" target="_blank">
       <i className="fa fa-github-square" aria-hidden="true" />
       </a>
       
       <a href="https://www.linkedin.com/in/serkan-sonmez-mba/" target="_blank">
       <i className="fa fa-linkedin-square" aria-hidden="true" />
       </a>
       

        

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;