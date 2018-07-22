import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

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
    this.moreRows = this.moreRows.bind(this)
    this.lessRows = this.lessRows.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
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
        return <div className='field fieldHeader' key={`${field.value}`} onClick={this.sortByField.bind(this, field)}>{field.name}</div>
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
    return <Link to={`${this.props.prefix}/${row.id}`}>
      <div className='row' key={row.id}>{fields}</div>
    </Link>
  }

  moreRows(){
    this.setState({pageSize: this.state.pageSize+10})
  }

  lessRows(){
    this.setState({pageSize: this.state.pageSize-10})
  }

  nextPage(){
    this.setState({currentPage: this.state.currentPage+1})
  }

  previousPage(){
    if (this.state.currentPage > 1) {
      this.setState({currentPage: this.state.currentPage-1})
    }
  }

  renderFooter(){
    return <div className='footer'>
      <div className='more' onClick={this.moreRows}>
      +  
      </div>
      <div className='less' onClick={this.lessRows}>
      -
      </div>
      <br/>
      <div className='previous' onClick={this.previousPage}>
      Previous Page
      </div>
      <div className='next' onClick={this.nextPage}>
      Next Page
      </div>
      <div>
      Current Page: {this.state.currentPage} 
      </div>
      <br/>
      <Link to="/">
        <div className='toHome'>
          Home
        </div>
      </Link>
    </div>
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
      <div className="rows">
        {rows}
      </div>
      {this.renderFooter()}
    </div>
  }
}

export default Grid