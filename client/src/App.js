import React, {Component} from 'react';
import axios from 'axios'
import {saveas} from 'file-saver'
import './App.css';

class App extends Component {
  state = {
    name: '',
    receiptID: '',
    price1:'',
    price2:'',
  }

handleChange = ({target: {value, name}}) => this.setState({[name]: value})

createAndDownloadPdf= ()=>{
  axios.post('/create-pdf',this.state)
}


  render(){
      return (
        <div className="App">
          <input type="text" placeholder="name" onchange={this.handleChange} />
          <input
            type="number"
            placeholder="receipt id"
            onchange={this.handleChange}
          />
          <input
            type="number"
            placeholder="price 1"
            onchange={this.handleChange}
          />
          <input
            type="number"
            placeholder="price 2"
            onchange={this.handleChange}
          />

          <button onClick={this.createAndDownloadPdf}>download PDF</button>
        </div>
      );
  }
}

export default App;
