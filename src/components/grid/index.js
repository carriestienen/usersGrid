import React from 'react'
import './style.scss'

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pageSize: 10,
      currentPage: 1,
      sortBy: null,
      order: true
    }

    this.renderHeader = this.renderHeader.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.currentRows = this.currentRows.bind(this)
    this.sortByField = this.sortByField.bind(this)
  }

  sortByField(field){
    this.props.rows.sort((first, second) => {
      let sort = first[field.value].localeCompare(second[field.value])
      if(!this.state.order){
        switch(sort){
          case 1:
            sort = -1
            break;
          case -1:
            sort = 1;
            break;
        }
      }
      return sort;
    })
    this.setState({sortBy: field, order: !this.state.order, currentPage: 1})
  }

  renderHeader(){
    let fields = 'No fields to display!';
    if(this.props.fields && this.props.fields.length > 0){
      fields = this.props.fields.map(field => {
        return <div className='field' key={`${field.value}`} onClick={this.sortByField.bind(this, field)}>{field.name}</div>
      })
    }
    return <div className='header'>{fields}</div>
  }

  renderRow(row){
    let fields = 'No fields to display!';
    if(this.props.fields && this.props.fields.length > 0){
      fields = this.props.fields.map(field => {
        return <div className='field' key={`${row.id} ${field.value}`}>{row[field.value]}</div>
      })
    }
    return <div className='row' key={row.id}>{fields}</div>
  }

  renderFooter(){
    return <div className='footer'>Footer</div>
  }

  currentRows(){
    let slice = [];
    const rows = this.props.rows;
    if(rows && rows.length > 0){
      const start = this.state.pageSize * (this.state.currentPage-1);
      const end = this.state.pageSize * this.state.currentPage;
      slice = rows.slice(start, end);
    }
    return slice;
  }

  render(){
    const rows = this.currentRows().map(row => { return this.renderRow(row)});
    return <div className='grid'>
      {this.renderHeader()}
      {rows}
      {this.renderFooter()}
    </div>
  }
}

export default Grid