import React from 'react'
import './style.scss'
import _ from 'lodash'
import {Link} from 'react-router-dom'

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
      return <tr key={key}><td><b className="computer-key">{key}</b></td><td className="computer-value">{value}</td></tr>
    })

    return <div className="computers-panel">
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

export default ComputerPanel