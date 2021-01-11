
import React from 'react';
import {Button, Card, Col, Row } from 'antd';
import {faRupeeSign} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CartIcon from './CartIcon';

const {  } = Card;
const colStyles = {
  flexBasis: "20%",
  width: "20%"
};
const divStyles = {
  padding: ".2em",

};
function ShoppLingList(props) {
  const addToCart = props.addToCart;
 
  return (
    <div className="site-card-wrapper">
       

      <Row type="flex" gutter={8}>

      {props.items.map((post,i) =>(
          <Col  style={{ ...colStyles }} key ={i}>
            <div style={{ ...divStyles }}>
          <Card key={post.id}
            className='productCard'
            hoverable
            cover={<img alt="example" src={post.image} />} >
            <h2>{post.name}</h2>
            <div className='price-box'>
              <p className='price'><FontAwesomeIcon icon={faRupeeSign}/>{post.price.actual} </p>
              <p className='priceold'> {post.price.display}  </p>
              <p className="productOffer">{post.discount} % off</p>
            </div>
            <span className='action'>
              <Button type="primary"  onClick={() => addToCart(post)}>Add to Cart</Button>
            </span>
          </Card>
          </div>
          </Col>
            ))}
      </Row>

    </div>
  );
}
export default ShoppLingList;