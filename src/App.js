import React from 'react';
import './App.css';
import AddProduct from './components/admin/AddProduct';
import Login from './components/Login';
import {Router, Route, Switch} from 'react-router-dom';
import { FcHome, FcApproval, FcInspection,FcDecision } from "react-icons/fc";
function App() {
  return (
    <div className="App">
      <header id="menu">
         <ul>
           <li><a href="#"><FcHome class="icon"/><p>Trang Chủ</p></a></li>
           <li><input type="text" name="search" placeholder="Nhập từ khóa cần tìm"></input></li>
           <li><a href="#"><FcApproval class="icon"/><p>Khuyến mãi</p></a></li>
           <li><a href="#"><FcInspection class="icon"/><p>Đơn hàng</p></a></li>
           <li><a href="#"><FcDecision class="icon"/><p>Đăng nhập</p> </a></li>
           <li><a href="#"><p>Giỏ hàng</p></a></li>
         </ul>
      </header>
      <div class="bd1">
        <div id="categories"></div>
        <div class="slide">
        <img src="image/sl.webp"></img>
        </div>
      </div>
      <div class="bd2">
        <div class="col-3 products">
            <img src="/image/logback.jpg" alt="image"></img>
          <div id="body-product">
            <p>Dell 2019</p>
            <div class="price"><span id="oldPrice">30.000.000 đ</span><span id="price">25.000.000đ</span></div>
          </div>
          <span class="button"><button>Đặt hàng</button><button>Chi tiết</button></span>
        </div>
      </div>

      {/* <Login/>
      <AddProduct/> */}
      
    </div>
  );
}

export default App;
