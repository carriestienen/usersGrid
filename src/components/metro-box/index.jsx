import React from 'react'
import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MetroBox extends React.Component {
  render(){
    return <div className='metro-box'>
    	<div className='name'>{this.props.name}</div>
    	<FontAwesomeIcon icon={this.props.icon} size="4x" />
    	<div className='count'>{this.props.count}</div>
    </div>
  }
}

export default MetroBox