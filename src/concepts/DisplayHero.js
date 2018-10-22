
//DISPLAYHERO CODE BELOW
import React, {Component} from 'react';
import './DisplayHero.css';

class DisplayHero extends Component{
  constructor(props){
    super(props);
    this.state = {
      heroIndex :  0
    }
  }

  toggleHero = () => {
    console.log(this.state.heroIndex);
    if (this.state.heroIndex < this.props.heroes.length - 1){
      this.setState({heroIndex: this.state.heroIndex + 1})
    } else {
      this.setState({heroIndex: 0})
    }
  }

  render(){
    const i = this.state.heroIndex;
    return(
      <div>
        <table className="table">
          <tbody>
          <tr>
            <td>{this.props.heroes[i].name}</td>
            <td>{this.props.heroes[i].superPower}</td>
            <td>{this.props.heroes[i].age}</td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.toggleHero}>Click for Different Hero</button>
      </div>
    );
  }
}

export default DisplayHero;
//END DISPLAYHERO CODE



