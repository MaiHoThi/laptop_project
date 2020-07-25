import React, {Component} from 'react';
import './style.css';
import Login from '../components/Login';
class Header extends Component{
    constructor() {
        super();
        this.state = {
            categories:[]
        }
        this.getData();
    }
    getData() {
        fetch("http://127.0.0.1:8000/api/categories")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateUI(data);
                });
            });
    }
    updateUI(data) {
        this.setState({
            categories: data
        })
    }
    
render(){
    return(
<div class="bd1">
        <div id="categories">
          <ul>
            <li class="cate">Danh sách sản phẩm</li>
            {
                this.state.categories.map((item,index)=>
                    <li><a>{item.name}</a></li>
            )}
          </ul>
        </div>
        <div class="slide">
        <img src="image/sl.webp"></img>
        </div>
        {/* <div class="log"><Login /></div> */}
      </div>
    );
}
}
export default Header;