import React from 'react'
import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MetroBox extends React.Component {
  render(){
    return <div className='metro-box'>
    	<div>{this.props.name}</div>
    	<br/>
    	<FontAwesomeIcon icon={this.props.icon} size="4x" />
    	<br/>
    	<br/>
    	<div className='count'>{this.props.count}</div>
    </div>
  }
}

export default MetroBox