import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.svg";

/** #009 Sử dụng props */

// Sử dụng props cách 1: Truyền props trực tiếp
function NumberOne(props) {
  return (
    <>
      <div className="col-6">
        <div className="card">
          <img
            className="card-img-top"
            src={props.hinhanh}
            alt="image-700x300"
          />
          <div className="card-body">
            <h1 className="card-title">{props.tieude}</h1>
            <p className="card-text">{props.noidung}</p>
          </div>
        </div>
      </div>
    </>
  );
}
// Cách 2 sử dụng class để định nghĩa props
// rcjc + tab
class NumberTwo extends Component {
  render() {
    return (
      <>
        <div className="col-6">
          <div className="card">
            <img
              className="card-img-top"
              src={this.props.hinhanh}
              alt="image-700x300"
            />
            <div className="card-body">
              <h1 className="card-title">{this.props.tieude}</h1>
              <p className="card-text">{this.props.noidung}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React basic
        </a>
      </header>

      <div className="container mt-5">
        <div className="row">
          <NumberOne
            tieude="Samsung"
            hinhanh="./assets/images/1.jpg"
            noidung="Điện thoại Samsung"
          />
          <NumberOne
            tieude="Iphone"
            hinhanh="https://fastly.picsum.photos/id/442/700/300.jpg?hmac=M7oDvld4RjWFtxaXoZi_dv7YHOALf1hRH9cgefVT-1o"
            noidung="Điện thoại Iphone"
          />
          <NumberOne
            tieude="Xiaomi"
            hinhanh="https://images.unsplash.com/photo-1768405942784-0d48a1f44fe7"
            noidung="Điện thoại Xiaomi"
          />
          <NumberTwo
            tieude="Nokia"
            hinhanh="https://fastly.picsum.photos/id/442/700/300.jpg?hmac=M7oDvld4RjWFtxaXoZi_dv7YHOALf1hRH9cgefVT-1o"
            noidung="Điện thoại Nokia"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
