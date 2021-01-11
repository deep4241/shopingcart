import React , { useState }  from 'react';
import { Badge } from 'antd';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartIcon(props) {
  const [cart] = useState([]);

  return (
    <>
     
        <Badge count={props.count}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Badge>
     {console.log(cart)}
    </>
  );
}

export default CartIcon;
