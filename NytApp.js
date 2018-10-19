import React, { Component } from 'react';
import NytResults from './NytResults'

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'edf60db6b8144569a875428174d892b0'; // same as the api

export default class NytApp extends Component {
  constructor(props) { //state is going to store the data you will pull through the app
    super(props)
    this.state = {
      search: '',
      startDate: '',
      endDate: '',
      pageNumber: 0, //pagination
      results: []
    };
  }

  handleChange = (event) => { // instead of event listeners
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    this.setState({pageNumber: 0}) //page number starting at 0
    this.fetchResults() //grabing the input field and getting the results 
    event.preventDefault()
  }

  fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
    url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url
    url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url
    fetch(url)
      .then(
        (response) => response.json()
      ).then((data) => {
        this.setState({ results: data.response.docs })
      })
  }

  changePageNumber = (e, direction) => {
    e.preventDefault()
    if (direction === 'down') {
      if (this.state.pageNumber > 0) {
        let newPageNumber = this.state.pageNumber - 1
        this.setState({ pageNumber: newPageNumber })
        this.fetchResults();
      }
    }
    if (direction === 'up') {
      let newPageNumber = this.state.pageNumber + 1 //
      this.setState({ pageNumber: newPageNumber })
      this.fetchResults();
    }
  }

  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <form onSubmit={e => this.handleSubmit(e)}>
            <span>Enter a SINGLE search term (required): </span>
            <input type="text" name="search" onChange={this.handleChange} required /><br />
            <span>Enter a start date: </span>
            <input type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
            <span>Enter an end date: </span>
            <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
            <button className="submit">Submit search</button>
          </form>
          {
            this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div>
          }
        </div>
      </div>
    );
  }
}