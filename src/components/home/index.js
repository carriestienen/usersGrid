import React from 'react'
import {Link} from 'react-router-dom'
import  "./style.scss"

import MetroBox from '../metro-box'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userCount: 'loading...',
      computerCount: 'loading...'
    }
  }

  componentDidMount(){
    this.props.api.readUsers().then(users => {
      this.setState({userCount: users.data.length, users: users.data})
      return this.props.api.readComputers()
    }).then(computers => {
      this.setState({computerCount: computers.data.length})
    })
  }

  render(){
    return (
      <div className='home-container'>
        <Link to="/users" className="trigger">
          <MetroBox name="Users" icon="user" count={this.state.userCount}/>
        </Link>
        <Link to="/computers" className="trigger">
         <MetroBox name="Computers" icon="computer" count={this.state.computerCount}/>
        </Link>
      </div>
    )
  }
}

export default Home