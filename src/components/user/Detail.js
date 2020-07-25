import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../style.css';
import NumberFormat from 'react-number-format';
class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }

    var id = this.props.match.params.id;

    this.getDetail(id);
  }
  getDetail(id) {
    fetch("http://127.0.0.1:8000/api/products/" + id +"/show")
      .then(response => {
        response.json()
          .then((data) => {
            console.log(data);
            this.updateUI(data);
          });
      });
  }

  updateUI(data) {
    this.setState({
      details: data
    })
  }
  render() {
     var {details} = this.state;
    return (
      <div class="bd2">
                  <div class="row">
              <div id="img"><img src={"http://127.0.0.1:8000" + details.image} atl="image" /></div>
              <div id="body"><h3>{details.name}</h3>
                <p id="status">{details.status}</p>
                <p> <span class="price"><NumberFormat value={details.price} displayType={'text'} thousandSeparator={true} prefix={'đ'} renderText={value => <div>{value}</div>} /></span></p>
                <p><span class="button"><button>Đặt hàng</button><button>Mua ngày</button></span></p>
                </div>
             <br></br>
              <p><b>{details.detail}</b></p>
      </div>
      </div>
    );
  }
}
export default withRouter(detail);