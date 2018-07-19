import React from 'react'
import _ from 'lodash'

class ComputerPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      computer: null
    }
  }

  componentDidMount(){
    this.props.api.readComputer(this.props.match.params.id).then(computer => {
      this.setState({computer: computer.data})
    })
  }

  render(){
    //return <div>{JSON.stringify(this.state.user)}</div>
    const properties = _.map(this.state.computer, function(value,key){
      return <tr><td><b>{key}</b></td> <td>{value}</td></tr>
    })
    return <table id="properties">{properties}</table>
  }
}

export default ComputerPanel