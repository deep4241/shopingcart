
import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import CartIcon from '../component/CartIcon';
import Search from '../component/Search'; 
import { Header } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';


function CustHeader(props) {
  const addToCart = props.addToCart;
  const inputEvent = props.inputEvent;
  const cart = props.cart;
 
  return (  
    <Header>
    <Row type="flex" gutter={8}>
      <Col xs={12} xl={4}>
      <Link to="/"> <FontAwesomeIcon className='headerLogo' icon={faStar} /></Link>           
      </Col>
      <Col xs={12} xl={20}>
        <div className='nav'>
         <Search addToCart = {addToCart} inputEvent = {inputEvent}/>
          <Link to="/cartpage"><CartIcon count = {cart.length} /></Link>
        </div>
      </Col>
    </Row>
  </Header>
  );
}
export default CustHeader;