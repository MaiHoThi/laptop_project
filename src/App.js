import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Product from './components/Product';
// import Greeting from './components/Greeting';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FcHome, FcApproval, FcInspection, FcDecision } from "react-icons/fc";
import Login from './components/Login';
import { MdAddShoppingCart } from "react-icons/md";
import Detail from './components/user/Detail';
import Register from './components/user/Register';
import Cart from './components/user/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    let user_id = localStorage.getItem('user_id');
    this.state = {
      user: []
    }
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.getUser(user_id);

  }
  
  

  handleLogoutClick() {
    localStorage.removeItem('user_id');
    this.setState({isLoggedIn: false});
  }

  getUser(id) {
    fetch('http://127.0.0.1:8000/api/profile/', {
      method: "get",
      headers: {
        "Authorization": id
      },
    })
      .then(response => {
        response.json().then((data) => {
          this.updateUI(data);
        });
      });
  }
  updateUI(data) {
    this.setState({
      user: data.user
    })
  }
  
 
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className="App">
        <header id="menu">

          <ul>
            <li><a href="/home"><FcHome class="icon" /><p>Trang Chủ</p></a></li>
            <li><input type="text" name="search" placeholder="Nhập từ khóa cần tìm"></input></li>
            <li><a href="#"><FcApproval class="icon" /><p>Khuyến mãi</p></a></li>
            <li><a href="add"><FcInspection class="icon" /><p>Đơn hàng</p></a></li>
            <li><FcDecision class="icon" /><p>{this.props.isLoggedIn ?(< div className="authentication"><h4></h4><button onClick={this.handleLogoutClick} >Logout</button></div>):(<span><a href="/login">Đăng nhập</a>/<a href="/register">Đăng Ký </a></span> )}  </p></li>
          <li><a href="/cart"><MdAddShoppingCart /><p>Giỏ hàng</p></a></li>
          </ul>
        {/* <h1>Hello {this.state.user.name}</h1> */}
        </header>
      <Router>
        <Switch>
          <Route path="/home" exact><Product /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
          <Route path={'/details/:id'}><Detail /></Route>
          <Route path="/cart"><Cart /></Route>

        </Switch>
      </Router>

      <Footer />
      </div >
    );

  }
}

export default App;
