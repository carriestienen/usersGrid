import React from 'react'
import './style.scss'

class MetroBox extends React.Component {
  render(){
    return <div className='metro-box'>
    	<div>{this.props.name}</div>
    	<br/>
    	<br/>
    	<div className='count'>{this.props.count}</div>
    </div>
  }
}

export default MetroBox