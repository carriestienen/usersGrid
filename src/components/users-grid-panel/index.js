import React from 'react'

import Grid from '../grid'

class UsersGridPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userCount: 'loading...',
      users: [],
      userFields: [
        {
          name: 'Display Name',
          value: 'displayname'
        },{
          name: 'Email',
          value: 'email'
        },{
          name: 'Last Logon',
          value: 'lastLogon'
        }
      ]
    }
  }

  componentDidMount(){
    this.props.api.readUsers().then(users => {
      this.setState({userCount: users.data.length, users: users.data})
    })
  }

  render(){
    return (
      <Grid prefix="/users" rows={this.state.users} fields={this.state.userFields} />
    )
  }
}

export default UsersGridPanel