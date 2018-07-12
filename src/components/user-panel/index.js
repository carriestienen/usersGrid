import React from 'react'

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
    return <div>{JSON.stringify(this.state.user)}</div>
  }
}

export default UserPanel