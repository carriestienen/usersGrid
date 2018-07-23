import React from 'react'
import _ from 'lodash'
import './style.scss'
import {Link} from 'react-router-dom'

class UserPanel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.props.api.readUser(this.props.match.params.id).then(user => {
      this.setState({user: user.data})
    })
  }
  render(){
    //return <div>{JSON.stringify(this.state.user)}</div>
    const properties = _.map(this.state.user, function(value,key){
      return <tr key={key}><td><b className="user-key">{key}</b></td><td className="user-value">{value}</td></tr>
    })

    return <div className="users-panel">
      <table id="properties"><tbody>{properties}</tbody></table>
      <div>
        <Link to="/">
          <div className='toHome'>
            Home
          </div>
        </Link>
      </div>
    </div>
  }
}

export default UserPanel