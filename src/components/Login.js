import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isLoggedIn:false
        }
        this.onLoginSubmit = this.onLoginSubmit.bind(this);

    }



    onLoginSubmit(event) {
        event.preventDefault();
        let email = event.target["email"].value;
        let password = event.target["password"].value;
        let post = {
            email: email,
            password: password
        }
        let postInJson = JSON.stringify(post);

        fetch(" http://127.0.0.1:8000/api/auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: postInJson
        })
            .then(response => {
                response.json()
                    .then(response => {
                        localStorage.setItem("user_id", response.user_id);
                        alert("Bạn đã đăng nhập thành công");
                        this.setState({
                            isLoggedIn:true
                        })
                        this.props.history.push("/home")//chuyển trang
                    });
            });
    }

    render() {
        return (
            <div id="login">
                <form class="Login" onSubmit={this.onLoginSubmit}>
                    <h1>Đăng nhập</h1>
                    <input type="email" name="email" placeholder="Nhập email xxx@gmail.com" required></input>
                    <input type="password" name="password" required placeholder="Nhập mật khẩu"></input>
                    <button>Đăng nhập</button>
                    <p class="p-bottom-w3ls">Quên mất khẩu?<a class href="#">  Click here</a></p>
                    <p class="p-bottom-w3ls1">Tạo tài khoản?<a class href="#"> Đăng ký</a></p>
                </form>

            </div>
        )
    }
}
export default withRouter(Login);