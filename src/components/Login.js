import React, {Component} from 'react';


class Login extends Component{

    render(){
        return(
            <div>
                <form class="Login">
                    <h1>Đăng nhập</h1>
                    <input type="file" name="img"></input>

                    <label ><b>Email</b></label>
                    <input type="email" name="email" required></input>

                    <label ><b>Mật khẩu</b></label>
                    <input type="password" name="password" required></input>

                    <button class="btn">Đăng nhập</button>

                </form>

            </div>
        )  
    }
}
export default Login;