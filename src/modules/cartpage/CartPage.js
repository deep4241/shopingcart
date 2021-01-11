
import { Col, Row, Button, Layout  } from 'antd';
import React from 'react';
import { faPlus, faMinus, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { Content, Sider } = Layout;
function CartPage(props) {
  const items = props.items;
  const removeCart = props.removeCart;
  
  let total=0;
  let qty=0
  console.log(props,"props");  
  props.items.map((post,i) =>
  {
    total=total+ (post.price.actual*post.qty);
    qty=qty+post.qty;
  })

  return (

    <div className="site-layout-content" style={{ marginTop: '10px' }}>
      
    <Layout className="layout">
    <Content>      <Row type="flex" gutter={8}>
      {props.items.map((post,i) =>(
        <Col xs={24} xl={23} key ={i}>
          <Row type="flex" className='cartcard'>
            <Col xs={6} xl={2}><img alt='' src={post.image} width={50} /></Col>
            <Col xs={18} xl={10} className='cartcarddesc'>
            <h2>{post.name}</h2>
              <p className='price'><FontAwesomeIcon icon={faRupeeSign}/>{post.price.actual} </p>
            </Col>
            <Col xs={12} xl={6} className='cartcardplusminus'>
              <div><Button type="primary" shape="circle" onClick={()=>props.addQty(post.name)}><FontAwesomeIcon icon={faPlus} /> </Button> </div>
              <div>{post.qty} </div>
              <div><Button type="primary" shape="circle" onClick={()=>props.removeQty(post.name)}><FontAwesomeIcon icon={faMinus} /> </Button> </div>
            </Col>
            <Col xs={12} xl={6} className='cartcardremove'><a onClick={() => removeCart(post)}>Remove</a></Col>
          </Row>
        </Col>
           
  ))}
 </Row></Content>
    <Sider><Row type="flex" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Col xs={24} xl={24}>
              <div className='cartSidebar'>
                <h2>Price Details</h2>
                <ul>
                  <li>Price ({qty} item): </li>
                  <li>{total}</li>
                </ul>
                <ul className='sidebarBg'>
                  <li>Total Payable :</li>
                  <li>{total}</li>
                </ul>
              </div>
            </Col>
          </Row></Sider>
  </Layout>


    </div>
  );
}
export default CartPage;