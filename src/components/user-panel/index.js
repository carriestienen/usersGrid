import React from 'react'
import _ from 'lodash'

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
      return <div>{key}: {value}</div>
    })
    return <div>{properties}</div>
  }
}

export default UserPanel