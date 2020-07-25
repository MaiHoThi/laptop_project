import React, { Component } from 'react';


class Cart extends Component {
    render() {
        return (
            <div id="cart">
                 <div class="row">
            <div class="cart">
                    <table id="customers">
                        <tr>
                            <td><img src="/image/shopping.webp"></img></td>
                            <td><h3>Laptop</h3></td>
                            <td> <button >+</button>
                                <input type="text" value="1" />
                                <button>-</button>
                            </td>
                            <td>300.000</td>
                        </tr>
                    </table>
            </div>
            <div class="cart">
                    <table id="customers">
                        <tr>
                            <td><img src="/image/shopping.webp"></img></td>
                            <td><h3>Laptop</h3></td>
                            <td> <button >+</button>
                                <input type="text" value="1" />
                                <button>-</button>
                            </td>
                            <td>300.000</td>
                        </tr>
                    </table>
            </div>
            <div class="payment">
                <p>Thành toán</p>
                <p>Tạm tính</p>
                <p>Phí vận chuyển</p>
                <p>Khuyến mãi</p>
                <p>Thành tiền</p>

            </div>
            </div>
            </div>
        );
    }
}
export default Cart;