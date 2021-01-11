import React from 'react';
import ShoppLingList from '../common/component/ShoppingList';
import Sort from '../common/component/Sort';



function HomePage(props) {
  const addToCart = props.addToCart;
  const items = props.items;
  const sort = props.sort;

  
  return (
    <>
    
      <Sort sort = {sort} />
      <div className="site-layout-content">
        <ShoppLingList items={items} addToCart={addToCart} />
      </div>
    </>
  );
}
export default HomePage;