import React, {Component} from 'react';
import axios from 'axios'
import {saveAs} from 'file-saver'
import './App.css';

class App extends Component {
  state = {
    name: "",
    receiptID: "",
    price1: "",
    price2: "",
  };

  // handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="receiptID"
          placeholder="receipt id"
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="price1"
          placeholder="price 1"
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="price2"
          placeholder="price 2"
          onChange={this.handleChange}
        />

        <button onClick={this.createAndDownloadPdf}>download PDF</button>
      </div>
    );
  }
}

export default App;
