import './components/app.scss'
import React from "react";
// import blogData from './components/data.js'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from "react-router-dom";

import Photo from './components/photo-1548016338-b00b4aa6a004 (1).jpeg'

//components
import Nav from './components/Nav'
import Contact from './components/Contact.js'
import Details from './components/Details.js'
import BlogPhotos from './components/Blog.js'
import blogData from './components/data';

//

function AppToday() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          
          <Route path='/blogphotos'  component={BlogPhotos}/>
          <Route path='/details' component={Details}/>
          <Route path='/details/:id'  component={Details}/>
          <Route path='/Contact'  component={Contact}/>
        </Switch>
    </div>
    </Router>

  )
}
export default AppToday;


const Home = () => (
  <div className='home-page'>
      <img className='img-home' src={Photo} alt=""/>
      <div className='box-home'>
    <h1>Welcome to my Simple Blog</h1>
   <Link to='/details'>
     <button className='button-border'>
        Go to Articles</button>
    </Link>
    </div>
  </div>
)