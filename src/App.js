
import { Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import CartPage from './modules/cartpage/CartPage';
import HomePage from './modules/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import './assets/css/style.css';
import CustHeader from './modules/common/component/Header';
const { Content, Footer } = Layout;

function App(props) {
  const [cart, setCart] = useState([]);
  const [items, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [prod, setProd] = useState();
  const [loading, setLoading] = useState(false);

  const addToCart = (items) => {
    setCart([...cart, { ...items, qty: 1 }]);
    //console.log(cart);  
  };
  const addQty = (product) => {
    const data = cart;
    data.forEach(item => {
      if (item.name === product) {
        item.qty++;
      }
    })
    console.log(data);
    setCart(data);
    let cnt = count;
    cnt++;
    setCount(cnt);
  };
  const removeQty = (product) => {
    const data = cart;
    let cnt = count;
    data.forEach(item => {
      if (item.name === product && item.qty > 1) {
        item.qty--;
        cnt++;
      }
    })
    setCart(data);
    setCount(cnt);
  };
  const removeCart = (productRemove) => {
    setCart(
      cart.filter((item) => item.name !== productRemove.name)
    );

  };

  const inputEvent = (event) => {
    const prod = event.target.value;
    cart.filter((item) => item.cart !== event.cart)
    //console.log(prod);
    setProd(prod);
    /*setPosts(
      items.filter((item) => item.name.indexOf(prod) >= 0)
    );*/
  };
  //low and high priority with discount filter 
  const sort = (mode = 'pricehigh') => {
    items.sort((a, b) => {
      if (mode === 'pricehigh') {
        return b.price.actual - a.price.actual;
      } else if (mode === 'pricelow') {
        return a.price.actual - b.price.actual;
      } else if (mode === 'discounthigh') {
        return b.discount - a.discount;
      }
    });
    setPosts(items);
    return;
  }

   //use api with useEffect
  useEffect((props) => {
    axios.get('https://my-json-server.typicode.com/prograk/demo/items')
      .then(res => {
        
        setPosts(res.data || [])
        setLoading(true);
      })

      .catch(err => {
        console.log(err)

      })
  }, [])


  //filter the items based on searh
  let data = prod && prod.length > 0 ? items.filter((item) => item.name.toLowerCase().indexOf(prod.toLowerCase()) >= 0) : items;

  return (

    <Layout className="layout">

      <CustHeader cart  ={cart} inputEvent  ={inputEvent}/>
      <Content style={{ padding: '0 20px', marginBottom: '50px' }}>
        {loading ? null : <Spin />}
        <Switch>
          
          <Route exact path='/' component={() => <HomePage addToCart={addToCart} items={data} sort={sort} />} />
          <Route path='/cartpage' component={() => <CartPage items={cart} removeCart={removeCart} addQty={addQty} removeQty={removeQty} />} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}> © copyright</Footer>
    </Layout>
  );
}
export default App;