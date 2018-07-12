import React from 'react'

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
    return <div>{JSON.stringify(this.state.computer)}</div>
  }
}

export default ComputerPanel