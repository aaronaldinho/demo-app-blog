import './components/app.scss'
import React from "react";
// import blogData from './components/data.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
        <BlogPhotos/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Blog'  component={BlogPhotos}/>
        <Route path='/Details' exact component={Details}/>
        <Route path='/Details/:id'  component={Details}/>
        <Route path='/Contact'  component={Contact}/>
      </Switch>

    </div>
    </Router>

  )
}
export default AppToday;


const Home = () => (
  <div className='home-page'>
      <img src='' alt=""/>
  </div>
)