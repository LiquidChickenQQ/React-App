import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Heroes from '../concepts/Heroes';
const Sidebar = () => {
  return(
    <div className="sidebar-styling">
      <ul className="sidebar-list">
        <li><Link to="/day1">Day 1 Challenge</Link></li>
      </ul>
      <div className="sidebar-routes">
        <Switch>
          <Route exact path="/day1"><Heroes /></Route>
        </Switch>
      </div>
    </div>
  )
}
export default Sidebar;