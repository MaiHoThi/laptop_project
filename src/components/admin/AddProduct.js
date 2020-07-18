import React, {Component} from 'react';
import '../style.css';
import {Container, Button} from 'reactstrap';
// import { withRouter } from 'react-router-dom';
class AddProduct extends Component{

    render(){
        return(
            <Container>
                <form class="Addproduct">
                <select name="id_categories">
                        <option value="1">Laptop</option>
                    </select>

                    <input type="text" placeholder="Nhập tên sản phẩm" name="namePro"></input>
                    <input type="text" placeholder="Nhập giá cũ (nếu có)" name="oldPrice"></input>
                    <input type="text" placeholder="Nhập giá mới" name="price"></input>
                    <input type="text" placeholder="Nhập số lượng sản phẩm" name="quantity"></input>
                    <input type="text" placeholder="Nhập tình trạng sản phẩm" name="status"></input>
                    <textarea rows="5" name="description"  placeholder="Mô tả sản phẩm"></textarea>
                    <button>Thêm sản phẩm</button>
                </form>
            </Container>
        )
    }
}
export default AddProduct;