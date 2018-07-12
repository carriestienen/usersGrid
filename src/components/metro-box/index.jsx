import React from 'react'
import './style.scss'

class MetroBox extends React.Component {
  render(){
    return <div className='metro-box'>{this.props.count}</div>
  }
}

export default MetroBox