import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../Component/LandingPage'
// if there is stateles we can create without class
// make sure import Route and Switch
import AboutMe from '../Component/AboutMe'
import Contact from '../Component/Contact'

import Resume from '../Component/Resume'
const Main = () => (
    <Switch>
     
        <Route exact path='/' component={LandingPage}  /> {/* build Route and link to LandingPAge */}
        <Route exact path='/AboutMe' component={AboutMe}  /> {/* build Route and link to AboutMe */}
        <Route exact path='/Contact' component={Contact}  /> {/* build Route and link to Contact */}
        <Route exact path='/Resume' component={Resume}  /> {/* build Route and link to Resume */}
        
    </Switch>

)

export default Main
