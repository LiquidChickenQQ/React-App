//HEROES CODE BELOW
import React, {Component} from 'react';
import DisplayHero from './DisplayHero';

class Heroes extends Component {
  constructor(){
    super();
    this.state = {
      heroes : [
        {name: 'Clark Kent', superPower: 'flight', age: 33},
        {name: 'Bruce Wayne', superPower: '$', age: 41}
      ]
    }
  }

  render() {
    return(
      <div>
        <DisplayHero heroes={this.state.heroes}/>
      </div>
    );
  }
}

export default Heroes;
//END HEROES CODE//HEROES CODE BELOW
