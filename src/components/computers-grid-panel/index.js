import React from 'react'
import Grid from '../grid'

class ComputersGridPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      computerCount: 'loading...',
      computers: [],
      computerFields: [
        {
          name: 'Display Name',
          value: 'displayname'
        },{
          name: 'OS',
          value: 'os'
        },{
          name: 'OS Version',
          value: 'osVersion'
        }
      ]
    }
  }

  componentDidMount(){
    this.props.api.readComputers().then(computers => {
      this.setState({computerCount: computers.data.length, computers: computers.data})
    })
  }

  render(){
    return (
      <Grid prefix="/computers" rows={this.state.computers} fields={this.state.computerFields} />
    )
  }
}

export default ComputersGridPanel